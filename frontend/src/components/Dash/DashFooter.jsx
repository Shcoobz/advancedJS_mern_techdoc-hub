import { useNavigate, useLocation } from 'react-router-dom';
import { PATH, UI_TEXT } from '../../config/constants';
import { HomeButton } from '../common/Buttons';
import { goHome } from '../../service/navigationService';
import useAuth from '../../hooks/useAuth';

function DashFooter() {
  const { username, status } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  let goHomeButton = null;

  if (pathname !== PATH.DASH.ROOT) {
    goHomeButton = <HomeButton onClick={goHome(navigate)} />;
  }

  const content = (
    <footer className='dash-footer'>
      {goHomeButton}
      <p>
        {UI_TEXT.currentUser} {username}
      </p>
      <p>
        {UI_TEXT.status} {status}
      </p>
    </footer>
  );

  return content;
}

export default DashFooter;
