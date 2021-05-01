import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-bs-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth) {}

  user$: Observable<firebase.User | null>;

  ngOnInit(): void {
    this.user$ = this.afAuth.authState;
  }

  logOut() {
    this.afAuth.signOut();
  }
}
