import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { ROUTES_ENUM } from "./constants/routing.constants";
import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AdminComponent } from "./components/admin/admin.component";
import { DecksComponent } from "./components/decks/decks.component";
import { DeckListingComponent } from "./components/deck-listing/deck-listing.component";
import { CardOverviewComponent } from "./components/card-overview/card-overview.component";
import { CardDetailsComponent } from "./components/card-details/card-details.component";
import { CardFormComponent } from "./components/card-form/card-form.component";

const routes: Routes = [
  // main
  { path: ROUTES_ENUM.Dashboard, component: DashboardComponent },
  { path: ROUTES_ENUM.Info, component: InfoComponent },
  { path: ROUTES_ENUM.Login, component: LoginComponent },
  { path: ROUTES_ENUM.Profile, component: ProfileComponent },
  { path: ROUTES_ENUM.Admin, component: AdminComponent },
  // projects
  { path: ROUTES_ENUM.Decks, component: DecksComponent },
  { path: ROUTES_ENUM.DeckListing, component: DeckListingComponent },
  // card
  { path: ROUTES_ENUM.CardOverview, component: CardOverviewComponent },
  { path: ROUTES_ENUM.CardOverview + "/:id", component: CardDetailsComponent },
  { path: ROUTES_ENUM.CardForm, component: CardFormComponent },
  { path: ROUTES_ENUM.CardForm + "/:id", component: CardFormComponent },
  // default
  { path: "**", redirectTo: "dashboard" },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
