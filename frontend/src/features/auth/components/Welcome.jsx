import useAuth from '../../../hooks/useAuth.js';
import WelcomeUI from './WelcomeUI.jsx';

/**
 * @function Welcome
 * @description Component for displaying a welcome message with user information.
 */
function Welcome() {
  const { username, isManager, isAdmin } = useAuth();
  const date = new Date();

  return (
    <WelcomeUI date={date} username={username} isManager={isManager} isAdmin={isAdmin} />
  );
}

export default Welcome;
