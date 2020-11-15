import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router'
import { WorkoutService } from '../helpers/workouts.service';
import { Workout } from '../shared/models/workout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  displayedColumns: string[] = ['name'];
  dataSource;
  

  constructor(private route: ActivatedRoute, private workoutService: WorkoutService, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
     
    })
    this.workoutService.getAllWorkouts().subscribe((v:any)=>{
      this.dataSource = v.workout;
    });
  }
  getRecord(workout: Workout):void{
    this.router.navigateByUrl("workout/"+ workout._id);
  }
}