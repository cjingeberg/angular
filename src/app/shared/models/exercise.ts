import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Exercise{
    public exerciseName: string;
    public repetitions: Number;
    public sets: Number;
    public weight: Number;
    public description: string;

    constructor(exerciseName:string, repetitions: Number, sets: Number, weight: Number, description: string){
        this.exerciseName = exerciseName;
        this.repetitions = repetitions;
        this.sets = sets; 
        this.weight = weight;
        this.description = description;
    }
}