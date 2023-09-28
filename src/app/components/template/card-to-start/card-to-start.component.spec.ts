import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardToStartComponent } from './card-to-start.component';

describe('CardToStartComponent', () => {
  let component: CardToStartComponent;
  let fixture: ComponentFixture<CardToStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardToStartComponent]
    });
    fixture = TestBed.createComponent(CardToStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
