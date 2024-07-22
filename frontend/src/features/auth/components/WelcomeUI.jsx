import useTitle from '../../../hooks/useTitle';
import { Link } from 'react-router-dom';
import { PATH, TITLE, UI } from '../../../config/constants';
import { formatDate, replaceUsername } from '../utils/utils';
import {
  dateDisplayPropTypes,
  greetingPropTypes,
  navigationLinksPropTypes,
  welcomeUIPropTypes,
} from '../../../config/propTypes';

/**
 * @function DateDisplay
 * @description Component for displaying the current date.
 */
function DateDisplay({ date }) {
  return <p>{formatDate(date)}</p>;
}

/**
 * @function Greeting
 * @description Component for displaying a greeting message with the username.
 */
function Greeting({ username }) {
  const greetingMessage = replaceUsername(UI.DASH.greeting, username);

  return <h1>{greetingMessage}</h1>;
}

/**
 * @function GreetingText
 * @description Component for displaying additional welcome text.
 */
function GreetingText() {
  return (
    <div>
      <p>{UI.DASH.welcome}</p> <br />
      <p>{UI.DASH.welcome2}</p> <br />
      <p>{UI.DASH.welcome3}</p> <br />
    </div>
  );
}

/**
 * @function NavigationLinks
 * @description Component for displaying navigation links based on user roles.
 */
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

/**
 * @function WelcomeUI
 * @description Main UI component for the welcome page, combining date display, greeting, and navigation links.
 */
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

/**
 * @constant propTypes
 * @description Prop types for the DateDisplay, Greeting, NavigationLinks, and WelcomeUI components.
 */
DateDisplay.propTypes = dateDisplayPropTypes;
Greeting.propTypes = greetingPropTypes;
NavigationLinks.propTypes = navigationLinksPropTypes;
WelcomeUI.propTypes = welcomeUIPropTypes;

export default WelcomeUI;
