import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Card } from "../models/Card.model";
import { CookieHelper } from "../utilities/cookie.util";
import { ServiceUrl } from "../constants/rest.constants";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";

const controller = "spectreCard";

@Injectable({
  providedIn: "root"
})
export class CardService {
  constructor(
    private http: HttpClient,
  ) { }

  public static getCardDescription(card: Card): string {
    const deckType = card.deckType;

    let cardType = card.cardType;
    if (card.cardType === "ORDER") {
      cardType = cardType + " " + card.cardSubType;
    }

    let values = card.valueOne;
    if (card.valueTwo) {
      values = values + "," + card.valueTwo;
    }
    if (card.valueThree) {
      values = values + "," + card.valueThree;
    }
    return `${deckType} | ${cardType} | ${values}`;
  }

  public getAll(): Observable<Card[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Card[]>;
  }

  public getSingle(id: string): Observable<Card> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: id,
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Card>;
  }

  public create(card: Card): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.post(url, card, CookieHelper.authHeaders) as Observable<any>;
  }

  public update(card: any): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.put(url, card, CookieHelper.authHeaders) as Observable<any>;
  }

  public delete(id: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: id,
    });
    return this.http.delete(url, CookieHelper.authHeaders) as Observable<any>;
  }
}
