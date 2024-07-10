import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function RequireAuth({ allowedRoles }) {
  const location = useLocation();
  const { roles } = useAuth();

  if (roles.length === 0) {
    // Check if there are no roles, implying no valid token/user not authenticated
    return <Navigate to='/' replace />;
  }

  const content = roles.some((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );

  return content;
}

export default RequireAuth;
