import {Component} from '@angular/core';
import {RoleService} from "@app/core/services/role.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private roleService: RoleService) {
  }

  setRole(role: string) {
    this.roleService.setUserRole(role);
  }

  logout() {
    this.roleService.logout();
  }
}
