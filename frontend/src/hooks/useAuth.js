import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../features/auth/state/authSlice';

import { jwtDecode } from 'jwt-decode';
import { CONFIG, REPLACEMENT } from '../config/constants';

function useAuth() {
  const token = useSelector(selectCurrentToken);
  let isManager = false;
  let isAdmin = false;
  let status = CONFIG.ROLE.employee;

  // shows highest status only
  if (token) {
    const decoded = jwtDecode(token);
    const { username, roles } = decoded.UserInfo;

    isManager = roles.includes(CONFIG.ROLE.manager);
    isAdmin = roles.includes(CONFIG.ROLE.admin);

    if (isManager) status = CONFIG.ROLE.manager;
    if (isAdmin) status = CONFIG.ROLE.admin;

    return { username, roles, status, isManager, isAdmin };
  }

  return {
    username: REPLACEMENT.emptyString,
    roles: REPLACEMENT.emptyArray,
    isManager,
    isAdmin,
    status,
  };
}

export default useAuth;
