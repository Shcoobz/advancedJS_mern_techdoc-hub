import { CONFIG } from '../../../config/constants';

export function getRolePriority(roles) {
  if (roles.includes(CONFIG.ROLE.admin)) return 1;
  if (roles.includes(CONFIG.ROLE.manager)) return 2;
  if (roles.includes(CONFIG.ROLE.employee)) return 3;
  return 4;
}
