import { UserService } from './user.service';
import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from '../models/app-User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User | null>;
  constructor(public afAuth: AngularFireAuth,
    private userService: UserService,

    private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logOut() {
    this.afAuth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.pipe(
      switchMap(user =>{
        if(user){
          return this.userService.get(user.uid)
        }
        return of(null)
      }   
      )
    )
  }
  
}
