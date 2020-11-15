import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Log } from '../shared/models/log';

@Injectable()
export class LogService {
  readonly url = 'https://backend-itewbz.herokuapp.com/log';

  logs: Log[];

  constructor(private http: HttpClient) {}

  getLogs() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    };
    return this.http.get<Log[]>(this.url, httpOptions).pipe(
      map((res: Log[]) => {
        catchError((err) => of(err));
        return res;
      })
    );
  
  }

  addLog(log: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    };
    return this.http.post<Log>(this.url, {log}, httpOptions).pipe(
      map((res: any) => {
        catchError((err) => of(err));
        return res;
      })
    );
  }
}
