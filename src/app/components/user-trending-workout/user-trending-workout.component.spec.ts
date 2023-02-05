import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrendingWorkoutComponent } from './user-trending-workout.component';

describe('UserTrendingWorkoutComponent', () => {
  let component: UserTrendingWorkoutComponent;
  let fixture: ComponentFixture<UserTrendingWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTrendingWorkoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTrendingWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
