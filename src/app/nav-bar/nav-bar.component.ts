import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-bs-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(public auth: AuthService) {}

  logOut() {
    this.auth.logOut();
  }
}
