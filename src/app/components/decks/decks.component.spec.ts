import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DecksComponent } from "./decks.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { CardComponent } from "../card/card.component";
import { LoadingComponent } from "../loading/loading.component";
import { SpectreCardComponent } from "../spectre-card/spectre-card.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("DecksComponent", () => {
  let component: DecksComponent;
  let fixture: ComponentFixture<DecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DecksComponent, HeaderComponent, BodyComponent, CardComponent, LoadingComponent,
        SpectreCardComponent,
      ],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
