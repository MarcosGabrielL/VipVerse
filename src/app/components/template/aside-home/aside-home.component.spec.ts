import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideHomeComponent } from './aside-home.component';

describe('AsideHomeComponent', () => {
  let component: AsideHomeComponent;
  let fixture: ComponentFixture<AsideHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideHomeComponent]
    });
    fixture = TestBed.createComponent(AsideHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
