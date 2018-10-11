import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   //Par convention aon ajoute un $ à nos observable 
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router) {
    this.user$ = afAuth.authState;
   }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    /*  .then(user => {
      if(user) {
        let returnUrl = localStorage.getItem('returnUrl');
        this.router.navigateByUrl(returnUrl); 
      }
    });
    this.afAuth.auth.getRedirectResult().then(result => {
      if (result.user) {
         this.router.navigate(['/'],{queryParams: { returnUrl: returnUrl}}); 
      }
      }); */
  }

  
  logout(){
    this.afAuth.auth.signOut();
  }


}
