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
    alert('You do not have permission to access this page');
    return false;
  }
  return true;
}
