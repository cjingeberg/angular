import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Workout {
  programName: String;
  _id: string;
  userId: String;
  exercise: [
    {
      exerciseName: String;
      repetitions: Number;
      sets: Number;
      weight: Number;
      description: String;
    }
  ];

  constructor(name: string) {
    this.programName = name;
  }
}
