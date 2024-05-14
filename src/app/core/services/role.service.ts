import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private userRoles: string[];

  constructor() {
  }

  setUserRole(role: string): void {
    this.userRoles = [];
    this.userRoles.push(role);
  }

  hasRole(expectedRoles: string[]): boolean {
    if (this.userRoles) {
      return this.userRoles.some(role => expectedRoles.includes(role));
    }
    return false;
  }

  logout() {
    this.userRoles = [];
  }
}
