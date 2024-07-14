import { useNavigate, Link, useLocation } from 'react-router-dom';

import { useSendLogoutMutation } from '../../features/auth/authApiSlice.js';
import { LogoutButton } from '../common/Buttons.jsx';
import { getDashClass, useLogoutEffect } from '../../service/utils.js';
import { getButtonsConfig } from '../../service/buttonConfig.jsx';
import { CLASS_NAME, PATH, UI_TEXT } from '../../config/constants.js';

import useAuth from '../../hooks/useAuth.js';
import Spinner from '../common/Spinner.jsx';

function DashHeader() {
  const { isManager, isAdmin } = useAuth();
  const { pathname } = useLocation();

  const [sendLogout, { isLoading, isSuccess, isError, error }] = useSendLogoutMutation();
  const navigate = useNavigate();

  useLogoutEffect(isSuccess, navigate);

  const dashClass = getDashClass(pathname);

  const renderedButtons = getButtonsConfig(pathname, navigate, isManager, isAdmin);

  const errClass = isError ? CLASS_NAME.ErrorMsg : CLASS_NAME.offscreen;
  const logoutButton = <LogoutButton onClick={sendLogout} />;

  const buttonsAndLogout = (
    <>
      {renderedButtons}
      {logoutButton}
    </>
  );

  const buttonContent = isLoading ? <Spinner /> : buttonsAndLogout;

  const content = (
    <>
      <p className={errClass}>{error?.data?.message}</p>

      <header className='dash-header'>
        <div className={`dash-header__container ${dashClass}`}>
          <Link to={PATH.DASH.ROOT}>
            <h1 className='dash-header__title'>{UI_TEXT.headerTitle}</h1>
          </Link>
          <nav className='dash-header__nav'>{buttonContent}</nav>
        </div>
      </header>
    </>
  );

  return content;
}

export default DashHeader;
