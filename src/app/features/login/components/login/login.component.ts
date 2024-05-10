import {Component} from '@angular/core';
import {AuthenticationService} from "@app/core/services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isAuthOpen: boolean = false;

  constructor(
    private authService: AuthenticationService) {
  }

  logOut() {
    this.authService.logOut();
  }
}
