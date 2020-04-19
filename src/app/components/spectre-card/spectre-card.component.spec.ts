import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SpectreCardComponent } from "./spectre-card.component";
import { CardComponent } from "../card/card.component";

describe("SpectreCardComponent", () => {
  let component: SpectreCardComponent;
  let fixture: ComponentFixture<SpectreCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpectreCardComponent, CardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
