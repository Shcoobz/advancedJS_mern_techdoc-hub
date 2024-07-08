import { Link } from 'react-router-dom';

function Welcome() {
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

      <h1>Welcome!</h1>

      <p>
        <Link to='/dash/notes/new'>Add new tech note</Link>
      </p>

      <p>
        <Link to='/dash/notes'>View tech notes</Link>
      </p>

      <p>
        <Link to='/dash/users'>View User settings</Link>
      </p>

      <p>
        <Link to='/dash/users/new'>Add new user</Link>
      </p>
    </section>
  );

  return content;
}

export default Welcome;
