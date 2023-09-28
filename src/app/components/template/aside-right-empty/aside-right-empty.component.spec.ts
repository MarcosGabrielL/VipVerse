import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideRightEmptyComponent } from './aside-right-empty.component';

describe('AsideRightEmptyComponent', () => {
  let component: AsideRightEmptyComponent;
  let fixture: ComponentFixture<AsideRightEmptyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideRightEmptyComponent]
    });
    fixture = TestBed.createComponent(AsideRightEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
