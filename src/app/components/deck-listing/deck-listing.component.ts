import { Component, OnInit } from "@angular/core";
import { CardService } from "src/app/services/card.service";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { Decks } from "src/app/models/Decks.model";

@Component({
  selector: "app-deck-listing",
  templateUrl: "./deck-listing.component.html",
  styleUrls: ["./deck-listing.component.scss"]
})
export class DeckListingComponent implements OnInit {
  public decks: Decks = null;
  public error = false;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.decks);
  }

  constructor(
    private cardService: CardService,
  ) { }

  public ngOnInit() {
    this.load();
  }

  private load(): void {
    this.decks = null;
    this.error = false;
    this.cardService.getDecks()
      .subscribe((res) => this.decks = res,
        (error) => {
          this.error = true;
          console.log("get decks failed");
        });
  }

}
