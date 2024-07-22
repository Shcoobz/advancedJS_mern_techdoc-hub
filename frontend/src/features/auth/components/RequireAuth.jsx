import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { INDEX, PATH } from '../../../config/constants.js';
import { requireAuthPropTypes } from '../../../config/propTypes.js';
import useAuth from '../../../hooks/useAuth.js';

function RequireAuth({ allowedRoles }) {
  const location = useLocation();
  const { roles } = useAuth();

  if (roles.length === INDEX.emptyArrayLength) {
    return <Navigate to={PATH.root} replace />;
  }

  const content = roles.some((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to={PATH.login} state={{ from: location }} replace />
  );

  return content;
}

RequireAuth.propTypes = requireAuthPropTypes;

export default RequireAuth;
