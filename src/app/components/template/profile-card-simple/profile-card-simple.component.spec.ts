import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardSimpleComponent } from './profile-card-simple.component';

describe('ProfileCardSimpleComponent', () => {
  let component: ProfileCardSimpleComponent;
  let fixture: ComponentFixture<ProfileCardSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileCardSimpleComponent]
    });
    fixture = TestBed.createComponent(ProfileCardSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
