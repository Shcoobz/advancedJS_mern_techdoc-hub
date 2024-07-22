import { useNavigate, useLocation } from 'react-router-dom';
import { PATH, UI } from '../../config/constants';
import { HomeButton } from '../common/Buttons';
import { goHome } from '../../service/navigationService';
import useAuth from '../../hooks/useAuth';

/**
 * @function DashFooter
 * @description Footer component for the dashboard, displaying user info and navigation.
 */
function DashFooter() {
  const { username, status } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  let goHomeButton = null;

  if (pathname !== PATH.DASH.baseUrl) {
    goHomeButton = <HomeButton onClick={goHome(navigate)} />;
  }

  const content = (
    <footer className='dash-footer'>
      {goHomeButton}
      <p>
        {UI.DASH.currentUser} {username}
      </p>
      <p>
        {UI.DASH.status} {status}
      </p>
    </footer>
  );

  return content;
}

export default DashFooter;
