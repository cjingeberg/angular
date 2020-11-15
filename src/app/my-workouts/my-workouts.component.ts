import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService } from '../helpers/workouts.service';
import { Workout } from '../shared/models/workout';

@Component({
  selector: 'app-my-workouts',
  templateUrl: './my-workouts.component.html',
  styleUrls: ['./my-workouts.component.scss']
})
export class MyWorkoutsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private workoutService: WorkoutService, private router: Router) { }
  displayedColumns: string[] = ['name'];
  dataSource; 
  programName = '';

  

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
     
    });

    this.workoutService.getWorkoutsByUserId().subscribe((v:any)=>{
      this.dataSource = v.workout;
    });
  }

  refresh() {
    this.workoutService.getWorkoutsByUserId().subscribe((v:any)=>{
      this.dataSource = v.workout;
    });
  }

  getRecord(workout: Workout):void{
    this.router.navigateByUrl("workout/"+ workout._id);
  }

  addWorkout(){   
    this.workoutService.addWorkout(this.programName).subscribe(() => {
      this.refresh();
    });
  }
}
