import { Link } from 'react-router-dom';
import { PATH, TITLE, UI } from '../../../config/constants';
import { formatDate, replaceUsername } from '../utils/utils';
import useTitle from '../../../hooks/useTitle';

function DateDisplay({ date }) {
  return <p>{formatDate(date)}</p>;
}

function Greeting({ username }) {
  const greetingMessage = replaceUsername(UI.DASH.greeting, username);
  return <h1>{greetingMessage}</h1>;
}

function GreetingText() {
  return (
    <div>
      <p>{UI.DASH.welcome}</p> <br />
      <p>{UI.DASH.welcome2}</p> <br />
      <p>{UI.DASH.welcome3}</p> <br />
    </div>
  );
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
  useTitle(`${TITLE.PUBLIC.companyInitials} ${TITLE.placeholder} ${TITLE.DASH.welcome}`);

  return (
    <section className='welcome'>
      <DateDisplay date={date} />
      <Greeting username={username} />
      <GreetingText />
      <NavigationLinks isManager={isManager} isAdmin={isAdmin} />
    </section>
  );
}

export default WelcomeUI;
