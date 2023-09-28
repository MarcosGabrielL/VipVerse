import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordLockScreenComponent } from './password-lock-screen.component';

describe('PasswordLockScreenComponent', () => {
  let component: PasswordLockScreenComponent;
  let fixture: ComponentFixture<PasswordLockScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordLockScreenComponent]
    });
    fixture = TestBed.createComponent(PasswordLockScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
