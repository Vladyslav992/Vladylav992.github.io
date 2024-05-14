import {CanActivateFn} from '@angular/router';
import {RoleService} from "@app/core/services/role.service";
import {inject} from "@angular/core";

export const roleGuard: CanActivateFn = (route, state) => {
  const roleService = inject(RoleService);
  const expectedRole = route.data['roles'];

  if (expectedRole.length === 0) {
    return true;
  }

  if (!roleService.hasRole(expectedRole)) {
    alert(
      ' To use all the functionality log in with admin@gamil.com email and password 987654321');
    return false;
  }
  return true;
}
