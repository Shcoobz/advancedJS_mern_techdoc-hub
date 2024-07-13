import { useNavigate, useLocation } from 'react-router-dom';
import { PATH, UI_TEXT } from '../../config/constants';
import { HomeButton } from '../common/Buttons';
import useAuth from '../../hooks/useAuth';

function DashFooter() {
  const { username, status } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  let goHomeButton = null;

  function onGoHomeClicked() {
    return navigate(PATH.DASH.ROOT);
  }

  if (pathname !== PATH.DASH.ROOT) {
    goHomeButton = <HomeButton onGoHomeClicked={onGoHomeClicked} />;
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
