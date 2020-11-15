import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { Exercise } from '../shared/models/exercise';
import { Workout } from '../shared/models/workout';

@Injectable({ providedIn: 'root' })
export class WorkoutService {
    readonly workoutUrl = 'http://localhost:3000/workouts'

    constructor(private http: HttpClient, private router: Router, public jwtHelper: JwtHelperService) {}

    public getAllWorkouts(){
        console.log(localStorage.getItem('token'));
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            })}
            console.log(localStorage.getItem('token'))
        return this.http.get<Workout[]>(this.workoutUrl + '/', httpOptions);
    }
    
    public getWorkout(_id: String) {
        return this.http.get<Workout>(this.workoutUrl + '/' + _id);
    }

    public addExercise(exercise: Exercise) {
        return this.http.post<boolean>(this.workoutUrl + '/addExerciseToWorkout', exercise)
            .subscribe(res => {
                return true;
            }, (err) => {
                console.log(err);
                return false;
            });
    }

    public getWorkoutsByUserId(){
        console.log(localStorage.getItem('token'));
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            })}
            console.log(localStorage.getItem('token'))
        return this.http.get<Workout[]>(this.workoutUrl + '/getWorkoutsByUserId/', httpOptions);
    }
}