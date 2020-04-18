import { Component, OnInit } from "@angular/core";
import { Card } from "src/app/models/Card.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { ActivatedRoute } from "@angular/router";
import { CardService } from "src/app/services/card.service";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { GeneralOption } from "src/app/models/GeneralOption.model";
import {
  TRAP_DECK_TYPE, ENCOUNTER_DECK_TYPE, TRAP_CARD_TYPES, ENCOUNTER_CARD_TYPES,
  ORDER_CARD_SUBTYPES
} from "src/app/constants/card-type.constants";

@Component({
  selector: "app-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.scss"]
})
export class CardFormComponent implements OnInit {
  public card: Card = null;

  public get deckTypeOptions(): GeneralOption[] {
    return [TRAP_DECK_TYPE, ENCOUNTER_DECK_TYPE];
  }

  public get cardTypeOptions(): GeneralOption[] {
    if (this.card.deckType === "TRAP") {
      return TRAP_CARD_TYPES;
    }
    return ENCOUNTER_CARD_TYPES;
  }

  public get cardSubTypeOptions(): GeneralOption[] {
    return ORDER_CARD_SUBTYPES;
  }

  public get readyForValueTwo(): boolean {
    return this.showHowManyOptions > 1;
  }

  public get readyForValueThree(): boolean {
    return this.showHowManyOptions > 2;
  }

  public get readyForValues(): boolean {
    const ordersNeedsSubType = this.cardIsOrders && !BooleanHelper.hasValue(this.card.cardSubType);
    return !this.cardTypeNotSet && !ordersNeedsSubType;
  }

  public get readyForCardSubType(): boolean {
    return !this.cardTypeNotSet && this.cardIsOrders;
  }

  public get readyForCardType(): boolean {
    return !this.deckTypeNotSet;
  }

  public get readyForSubmit(): boolean {
    const valueOneValid = this.readyForValues && BooleanHelper.hasValue(this.card.valueOne);
    const valueTwoValid = !this.readyForValueTwo || BooleanHelper.hasValue(this.card.valueTwo);
    const valueThreeValid = !this.readyForValueThree || BooleanHelper.hasValue(this.card.valueThree);
    return valueOneValid && valueTwoValid && valueThreeValid;
  }

  public get title(): string {
    if (this.editMode) {
      return "Edit Card";
    }
    return "Create Card";
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.card);
  }

  public get editMode(): boolean {
    return this.ready && BooleanHelper.hasValue(this.card._id);
  }

  private get deckTypeNotSet(): boolean {
    return !BooleanHelper.hasValue(this.card.deckType);
  }

  private get cardTypeNotSet(): boolean {
    return !BooleanHelper.hasValue(this.card.cardType);
  }

  private get cardIsOrders(): boolean {
    return this.card.cardType === "ORDERS";
  }

  private get cardIsThink(): boolean {
    return this.card.cardType === "THINK";
  }

  private get cardIsHunter(): boolean {
    return this.card.cardType === "HUNTER";
  }

  private get cardIsGenerator(): boolean {
    return this.card.cardType === "GENERATOR";
  }

  private get showHowManyOptions(): number {
    if (this.cardIsHunter || this.cardIsGenerator) {
      return 2;
    } else if (this.cardIsOrders) {
      return 3;
    } else {
      return 1;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.setupForm();
  }

  public submit() {
    if (this.editMode) {
      this.runEdit();
    } else {
      this.runCreate();
    }
  }

  private runEdit() {
    let response;
    this.cardService.update(this.card)
      .subscribe((res) => response = res,
        (error) => {
          console.log("update card failed");
        }, () => {
          this.navHelper.goCardOverview();
        });
  }

  private runCreate() {
    let response;
    console.log(this.card);
    this.cardService.create(this.card)
      .subscribe((res) => response = res,
        (error) => {
          console.log("create card failed");
        }, () => {
          this.navHelper.goCardOverview();
        });
  }

  private setupForm() {
    const urlId = this.route.snapshot.paramMap.get("id");
    if (BooleanHelper.notNull(urlId)) {
      this.setupEditForm(urlId);
    } else {
      this.setupCreateForm();
    }
  }

  private setupEditForm(id: string): void {
    this.cardService.getSingle(id)
      .subscribe((res) => this.card = res,
        (error) => {
          console.log("get card failed");
        });
  }

  private setupCreateForm(): void {
    this.card = {
      _id: null,
      deckType: null,
      cardType: null,
      cardSubType: null,
      valueOne: null,
      valueTwo: null,
      valueThree: null,
    };
  }

}
