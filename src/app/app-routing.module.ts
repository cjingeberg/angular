import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyWorkoutsComponent } from './my-workouts/my-workouts.component';
import { WorkoutComponent } from './workout/workout.component';
import { AuthGuard } from './helpers/auth.guard';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'my-workouts',
    component: MyWorkoutsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'workout/:id',
    component: WorkoutComponent,
    canActivate: [AuthGuard],
  },
  { path: 'log', component: LogComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
