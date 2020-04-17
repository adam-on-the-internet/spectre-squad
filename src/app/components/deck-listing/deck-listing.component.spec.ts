import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckListingComponent } from './deck-listing.component';

describe('DeckListingComponent', () => {
  let component: DeckListingComponent;
  let fixture: ComponentFixture<DeckListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
