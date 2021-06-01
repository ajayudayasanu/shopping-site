import { AppUser } from './../shared/models/app-User';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-bs-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  appUser:AppUser;
  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appuser =>{
      this.appUser= appuser;
    })
  }

  logOut() {
    this.auth.logOut();
  }
}
