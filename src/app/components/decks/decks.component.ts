import { Component, OnInit } from "@angular/core";
import { CardService } from "src/app/services/card.service";
import { Decks } from "src/app/models/Decks.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { Card } from "src/app/models/Card.model";

@Component({
  selector: "app-decks",
  templateUrl: "./decks.component.html",
  styleUrls: ["./decks.component.scss"]
})
export class DecksComponent implements OnInit {
  public decks: Decks = null;
  public selectedCard: Card = null;
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

  public drawThink() {
    this.selectedCard = this.drawCard(this.decks.thinkDeck);
  }

  public drawOrders() {
    this.selectedCard = this.drawCard(this.decks.ordersDeck);
  }

  public drawAnagrams() {
    this.selectedCard = this.drawCard(this.decks.anagramsDeck);
  }

  public drawHunter() {
    this.selectedCard = this.drawCard(this.decks.hunterDeck);
  }

  public drawGenerator() {
    this.selectedCard = this.drawCard(this.decks.generatorDeck);
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

  private drawCard(deck): Card {
    deck.push(deck.splice(0, 1)[0]);
    return deck[0];
  }

}
