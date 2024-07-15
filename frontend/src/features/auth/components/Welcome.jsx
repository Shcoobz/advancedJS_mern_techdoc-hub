import useAuth from '../../../hooks/useAuth.js';
import WelcomeUI from './WelcomeUI.jsx';

function Welcome() {
  const { username, isManager, isAdmin } = useAuth();
  const date = new Date();

  return (
    <WelcomeUI date={date} username={username} isManager={isManager} isAdmin={isAdmin} />
  );
}

export default Welcome;
