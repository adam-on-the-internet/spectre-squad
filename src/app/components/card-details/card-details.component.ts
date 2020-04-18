import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card.model';
import { BooleanHelper } from 'src/app/utilities/boolean.util';
import { CardService } from 'src/app/services/card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  public card: Card = null;

  public get ready(): boolean {
    return BooleanHelper.notNull(this.card);
  }

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.loadApp();
  }

  private loadApp(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.cardService.getSingle(id)
      .subscribe((res) => this.card = res,
        (error) => {
          console.log("get card failed");
        });
  }


}
