import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
@Component({
  selector: 'app-bs-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth) {}

  user: firebase.User | null;

  ngOnInit(): void {
    this.afAuth.authState.subscribe((user) => {
      this.user = user;
    });
  }

  logOut() {
    this.afAuth.signOut();
  }
}
