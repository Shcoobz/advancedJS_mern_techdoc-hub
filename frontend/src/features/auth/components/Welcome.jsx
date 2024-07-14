import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth.js';

function Welcome() {
  const { username, isManager, isAdmin } = useAuth();

  const date = new Date();
  const today = new Intl.DateTimeFormat('de-AT', {
    dateStyle: 'full',
    timeStyle: 'long',
  })
    .format(date)
    .replace(/\.\s/g, ' ');

  const content = (
    <section className='welcome'>
      <p>{today}</p>

      <h1>Welcome {username}!</h1>

      <p>
        <Link to='/dash/notes/new'>Add new tech note</Link>
      </p>

      <p>
        <Link to='/dash/notes'>View tech notes</Link>
      </p>

      {/* protected links for specific roles */}
      {(isManager || isAdmin) && (
        <p>
          <Link to='/dash/users'>View User Settings</Link>
        </p>
      )}

      {(isManager || isAdmin) && (
        <p>
          <Link to='/dash/users/new'>Add New User</Link>
        </p>
      )}
    </section>
  );

  return content;
}

export default Welcome;
