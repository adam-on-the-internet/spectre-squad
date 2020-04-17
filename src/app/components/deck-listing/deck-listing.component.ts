import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/models/Card.model';
import { BooleanHelper } from 'src/app/utilities/boolean.util';

@Component({
  selector: 'app-deck-listing',
  templateUrl: './deck-listing.component.html',
  styleUrls: ['./deck-listing.component.scss']
})
export class DeckListingComponent implements OnInit {
  public cards: Card[] = null;
  public error = false;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.cards);
  }

  constructor(
    private cardService: CardService,
  ) { }

  public ngOnInit() {
    this.load();
  }

  private load(): void {
    this.cards = null;
    this.error = false;
    this.cardService.getAll()
      .subscribe((res) => this.cards = res,
        (error) => {
          this.error = true;
          console.log("get cards failed");
        });
  }

}
