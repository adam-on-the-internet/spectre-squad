import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardOverviewComponent } from "./card-overview.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { LoadingComponent } from "../loading/loading.component";
import { CardComponent } from "../card/card.component";
import { CardTableComponent } from "../card-table/card-table.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("CardOverviewComponent", () => {
  let component: CardOverviewComponent;
  let fixture: ComponentFixture<CardOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardOverviewComponent, HeaderComponent, BodyComponent, LoadingComponent, CardComponent,
        CardTableComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
