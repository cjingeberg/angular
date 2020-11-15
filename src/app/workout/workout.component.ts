import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../helpers/authentacation.service';
import { WorkoutService } from '../helpers/workouts.service';
import { Exercise } from '../shared/models/exercise';
import { Workout } from '../shared/models/workout';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private authservice: AuthenticationService,
    private workoutservice: WorkoutService
  ) {
    this.route.params.subscribe((params) => {
      this.workoutid = params.id;
      this.workoutservice.getWorkout(params.id).subscribe(workout => {
        this.Exercises = workout.exercise;
      });
    });
  }

  workoutid;

  loggedIn = this.authservice.isAuthenticated();

  displayedColumns: string[] = [
    'exerciseName',
    'repetitions',
    'sets',
    'weight',
    'description',
  ];

  displayedColumnsFooter: string[] = this.loggedIn
    ? this.displayedColumns
    : null;

  Exercises;

  exerciseName = '';
  repetitions = 0;
  sets = 0;
  weight = 0;
  description = '';

  ngOnInit(): void {}

  addExercise() {
    if (
      this.exerciseName != '' &&
      this.repetitions != 0 &&
      this.sets != 0 &&
      this.weight != 0 &&
      this.description != ''
    ) {
      var exercise = new Exercise(
        this.exerciseName,
        this.repetitions,
        this.sets,
        this.weight,
        this.description
      );
      
      this.workoutservice.addExercise(exercise, this.workoutid).subscribe(res => {
        console.log(res);
        this.Exercises = res.exercise;
      }, (err) => {
        console.log(err);
        return false;
      });;

      this.exerciseName = '';
      this.repetitions = 0;
      this.sets = 0;
      this.weight = 0;
      this.description = '';
    }
  }
}
