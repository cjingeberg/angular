import {Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentacation.service';
import { Observable, of, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}



    canActivate(): boolean {
        if(!this.authenticationService.isAuthenticated()) {
            this.router.navigate(['home']);
            return false;
        }
        return true;
    }

    
}