import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';
import { Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import * as firebase from 'firebase';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  fbUser: firebase.User;

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
    .pipe(map((appUser :AppUser) => appUser.isAdmin));
 }
}
