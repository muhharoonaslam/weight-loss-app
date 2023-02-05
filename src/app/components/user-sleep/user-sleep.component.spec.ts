import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSleepComponent } from './user-sleep.component';

describe('UserSleepComponent', () => {
  let component: UserSleepComponent;
  let fixture: ComponentFixture<UserSleepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSleepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSleepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
