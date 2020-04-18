import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardDetailsComponent } from "./card-details.component";
import { BodyComponent } from "../body/body.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { LoadingComponent } from "../loading/loading.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("CardDetailsComponent", () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardDetailsComponent, BodyComponent, LoadingComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
