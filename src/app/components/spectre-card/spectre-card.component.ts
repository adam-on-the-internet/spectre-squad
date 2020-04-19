import { Component, Input } from "@angular/core";
import { Card } from "src/app/models/Card.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";

@Component({
  selector: "app-spectre-card",
  templateUrl: "./spectre-card.component.html",
  styleUrls: ["./spectre-card.component.scss"]
})
export class SpectreCardComponent {
  @Input() public card: Card = null;

  public get isThink(): boolean {
    return this.card.cardType === "THINK";
  }

  public get isOrders(): boolean {
    return this.card.cardType === "ORDERS";
  }

  public get isAnagrams(): boolean {
    return this.card.cardType === "ANAGRAMS";
  }

  public get isHunter(): boolean {
    return this.card.cardType === "HUNTER";
  }

  public get isGenerator(): boolean {
    return this.card.cardType === "GENERATOR";
  }

  public get hasOneOption(): boolean {
    return this.isThink || this.isAnagrams;
  }

  public get hasMultipleOptions(): boolean {
    return !this.hasOneOption;
  }

  public get hasThreeOptions(): boolean {
    return this.isOrders;
  }

  public get cardSet(): boolean {
    return BooleanHelper.hasValue(this.card);
  }

}
