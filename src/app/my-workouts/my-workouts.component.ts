import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService } from '../helpers/workouts.service';

@Component({
  selector: 'app-my-workouts',
  templateUrl: './my-workouts.component.html',
  styleUrls: ['./my-workouts.component.scss']
})
export class MyWorkoutsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private workoutService: WorkoutService, private router: Router) { }
  displayedColumns: string[] = ['name'];
  dataSource; 

  

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
     
    });

    this.workoutService.getAllWorkouts().subscribe((v:any)=>{
      this.dataSource = v.workout;
    });
  }
}
