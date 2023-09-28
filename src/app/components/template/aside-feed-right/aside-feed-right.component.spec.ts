import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideFeedRightComponent } from './aside-feed-right.component';

describe('AsideFeedRightComponent', () => {
  let component: AsideFeedRightComponent;
  let fixture: ComponentFixture<AsideFeedRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideFeedRightComponent]
    });
    fixture = TestBed.createComponent(AsideFeedRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
