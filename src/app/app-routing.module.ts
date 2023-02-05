import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Pages
import { HomeComponent } from './components/home/home.component';
import { UserHistoryComponent } from './components/user-history/user-history.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'history', component: UserHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
	UserHistoryComponent,
	HomeComponent,
];