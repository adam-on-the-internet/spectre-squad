import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DeckListingComponent } from "./deck-listing.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { CardComponent } from "../card/card.component";
import { LoadingComponent } from "../loading/loading.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("DeckListingComponent", () => {
  let component: DeckListingComponent;
  let fixture: ComponentFixture<DeckListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DeckListingComponent, HeaderComponent, BodyComponent, CardComponent,
        LoadingComponent,
      ],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
