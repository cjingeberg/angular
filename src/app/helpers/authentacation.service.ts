import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User, DbUser } from '../shared/models/user';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    readonly userUrl = 'https://backend-itewbz.herokuapp.com/auth'

    constructor(private http: HttpClient, private router: Router, public jwtHelper: JwtHelperService) {}


    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }

    public login(username, password) {
        return this.http.post<User>(this.userUrl + '/login', { username, password })
            .pipe(map(response => {
                localStorage.setItem('token', response.token.replace(/["']/g, ""));
                return response;
            }));
    }

    public logout() {
        localStorage.removeItem('token');
    }

    public register(user: DbUser) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.post<boolean>(this.userUrl + '/register', user, httpOptions)
            .pipe(map((res: boolean) => {
                catchError(err => of(err))
                return res;
            }));
    }
}