import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGoalForWeekComponent } from './user-goal-for-week.component';

describe('UserGoalForWeekComponent', () => {
  let component: UserGoalForWeekComponent;
  let fixture: ComponentFixture<UserGoalForWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGoalForWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGoalForWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
