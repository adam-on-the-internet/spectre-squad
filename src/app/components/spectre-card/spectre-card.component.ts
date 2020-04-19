import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/Card.model';
import { BooleanHelper } from 'src/app/utilities/boolean.util';

@Component({
  selector: 'app-spectre-card',
  templateUrl: './spectre-card.component.html',
  styleUrls: ['./spectre-card.component.scss']
})
export class SpectreCardComponent {
  @Input() public card: Card = null;

  public get cardSet(): boolean {
    return BooleanHelper.hasValue(this.card);
  }

}
