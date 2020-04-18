import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ROUTES_ENUM } from "../constants/routing.constants";

@Injectable({
  providedIn: "root"
})
export class NavHelperService {

  constructor(
    private router: Router,
  ) { }

  public goToDashboard(): void {
    this.goToRoute(ROUTES_ENUM.Dashboard);
  }

  public goToInfo(): void {
    this.goToRoute(ROUTES_ENUM.Info);
  }

  public goToProfile(): void {
    this.goToRoute(ROUTES_ENUM.Profile);
  }

  public goToAdmin(): void {
    this.goToRoute(ROUTES_ENUM.Admin);
  }

  public goToLogin(): void {
    this.goToRoute(ROUTES_ENUM.Login);
  }

  // PROJECTS

  public goRules(): void {
    this.goToRoute(ROUTES_ENUM.Rules);
  }

  public goDecks(): void {
    this.goToRoute(ROUTES_ENUM.Decks);
  }

  public goDeckListing(): void {
    this.goToRoute(ROUTES_ENUM.DeckListing);
  }

  public goCardOverview(): void {
    this.goToRoute(ROUTES_ENUM.CardOverview);
  }

  public goToCardDetails(id: string): void {
    this.goToRoutes([ROUTES_ENUM.CardOverview, id]);
  }

  public goToCardCreateForm(): void {
    this.goToRoute(ROUTES_ENUM.CardForm);
  }

  public goToCardEditForm(id: string): void {
    this.goToRoutes([ROUTES_ENUM.CardForm, id]);
  }

  // GENERAL

  private goToRoute(route: string): void {
    this.goToRoutes([route]);
  }

  private goToRoutes(routes: string[]): void {
    this.router.navigate(routes);
  }
}
