import { Link } from 'react-router-dom';
import { PATH, UI } from '../../../config/constants';
import { formatDate, replaceUsername } from '../utils/utils';

function DateDisplay({ date }) {
  return <p>{formatDate(date)}</p>;
}

function Greeting({ username }) {
  const greetingMessage = replaceUsername(UI.DASH.greeting, username);
  return <h1>{greetingMessage}</h1>;
}

function NavigationLinks({ isManager, isAdmin }) {
  return (
    <>
      <p>
        <Link to={PATH.DASH.NOTE.new}>{UI.DASH.LINK.addNewNote}</Link>
      </p>
      <p>
        <Link to={PATH.DASH.NOTE.overview}>{UI.DASH.LINK.viewNotes}</Link>
      </p>
      {(isManager || isAdmin) && (
        <>
          <p>
            <Link to={PATH.DASH.USER.overview}>{UI.DASH.LINK.viewUsers}</Link>
          </p>
          <p>
            <Link to={PATH.DASH.USER.new}>{UI.DASH.LINK.addNewUser}</Link>
          </p>
        </>
      )}
    </>
  );
}

function WelcomeUI({ date, username, isManager, isAdmin }) {
  return (
    <section className='welcome'>
      <DateDisplay date={date} />
      <Greeting username={username} />
      <NavigationLinks isManager={isManager} isAdmin={isAdmin} />
    </section>
  );
}

export default WelcomeUI;
