import { UserService } from './shared/services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private auth: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    auth.user$.subscribe((user) => {
      if (user) {
        // save the updates about user to the user database on firestore
        userService.save(user);

        //getting  the return url and redirecting user
        let returnUrl: any = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
