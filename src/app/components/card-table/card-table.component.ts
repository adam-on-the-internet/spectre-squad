import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/Card.model';
import { CookieHelper } from 'src/app/utilities/cookie.util';
import { CardService } from 'src/app/services/card.service';
import { NavHelperService } from 'src/app/services/nav-helper.service';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})
export class CardTableComponent implements OnInit {
  @Input() public management = true;

  public cards: Card[] = null;
  public error = false;

  public get canEdit(): boolean {
    return this.management && CookieHelper.admin;
  }

  public get ready(): boolean {
    return this.cards !== null;
  }

  public get hasCard(): boolean {
    return this.cards.length > 0;
  }

  constructor(
    private cardService: CardService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.load();
  }

  public goDetails(card: Card): void {
    this.navHelper.goToCardDetails(card._id);
  }

  public goCreate(): void {
    this.navHelper.goToCardCreateForm();
  }

  public goEdit(card: Card): void {
    this.navHelper.goToCardEditForm(card._id);
  }

  public requestDelete(card: Card): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${card._id}?`);
    if (confirmDelete) {
      this.delete(card);
    }
  }

  private delete(card: Card): void {
    this.cardService.delete(card._id)
      .subscribe((res) => this.cards = res,
        (error) => {
          console.log("delete card failed");
        }, () => {
          this.load();
        });
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
