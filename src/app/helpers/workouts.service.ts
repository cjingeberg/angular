import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Exercise } from '../shared/models/exercise';
import { Workout } from '../shared/models/workout';

@Injectable({ providedIn: 'root' })
export class WorkoutService {
    readonly workoutUrl = 'https://backend-itewbz.herokuapp.com/workouts'

    constructor(private http: HttpClient, private router: Router, public jwtHelper: JwtHelperService) {}

    public getAllWorkouts(){
        return this.http.get<Workout[]>(this.workoutUrl);
    }
    
    public getWorkout(_id: String) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            })};
        return this.http.get<Workout>(this.workoutUrl + '/' + _id, httpOptions);
    }

    public addWorkout(programName: string){
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            })};
            
            return this.http.post<boolean>(this.workoutUrl + '/addWorkout', {programName}, httpOptions)
            .pipe(map((res: boolean) => {
                catchError(err => of(err))
                console.log(res);
                
                return res;
            }));
    }


    public addExercise(exercise: Exercise, id: String) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            })};
        var params = {
            workoutId: id,
            exerciseName: exercise.exerciseName,
            repetitions: exercise.repetitions,
            sets: exercise.sets,
            weight: exercise.weight,
            description: exercise.description,
        };
        return this.http.put<Workout>(this.workoutUrl + '/addExerciseToWorkout', params, httpOptions);
    }

    public getWorkoutsByUserId(){
        console.log(localStorage.getItem('token'));
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            })};
        return this.http.get<Workout[]>(this.workoutUrl + '/byUserId', httpOptions);
    }
}