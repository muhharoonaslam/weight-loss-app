import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserActivityComponent } from './components/user-activity/user-activity.component';
import { UserGoalForWeekComponent } from './components/user-goal-for-week/user-goal-for-week.component';
import { UserTrendingWorkoutComponent } from './components/user-trending-workout/user-trending-workout.component';
import { UserWeightComponent } from './components/user-weight/user-weight.component';
import { ActionSheetComponent } from './components/action-sheet/action-sheet.component';
import { WeightModalComponent } from './components/weight-modal/weight-modal.component';
import { BmiCardComponent } from './components/bmi-card/bmi-card.component';
import { UserSleepComponent } from './components/user-sleep/user-sleep.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderTwoComponent } from './components/header-two/header-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    UserActivityComponent,
    UserGoalForWeekComponent,
    UserTrendingWorkoutComponent,
    UserWeightComponent,
    routingComponents,
    ActionSheetComponent,
    WeightModalComponent,
    BmiCardComponent,
    UserSleepComponent,
    HeaderTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
