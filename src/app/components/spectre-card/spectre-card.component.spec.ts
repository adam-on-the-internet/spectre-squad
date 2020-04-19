import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectreCardComponent } from './spectre-card.component';

describe('SpectreCardComponent', () => {
  let component: SpectreCardComponent;
  let fixture: ComponentFixture<SpectreCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpectreCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
