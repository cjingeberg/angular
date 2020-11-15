import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { AuthenticationService } from './helpers/authentacation.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MyWorkoutsComponent } from './my-workouts/my-workouts.component';
import { MatTableModule } from '@angular/material/table'
import {
  JwtHelperService,
  JwtModule,
  JwtModuleOptions,
  JWT_OPTIONS,
} from '@auth0/angular-jwt';
import { WorkoutComponent } from './workout/workout.component';
import { LogComponent } from './log/log.component';
import { LogService } from './helpers/log.service';



@NgModule({
  declarations: [AppComponent, HomeComponent, MyWorkoutsComponent, WorkoutComponent, LogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [
    AuthenticationService,
    LogService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
