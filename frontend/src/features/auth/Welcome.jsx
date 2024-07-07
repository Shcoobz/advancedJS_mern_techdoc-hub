import { Link } from 'react-router-dom';

function Welcome() {
  const date = new Date();
  const today = new Intl.DateTimeFormat('de-AT', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(date);

  const content = (
    <section className='welcome'>
      <p>{today}</p>

      <h1>Welcome!</h1>

      <p>
        <Link to='/dash/notes'>View Tech Notes</Link>
      </p>

      <p>
        <Link to='/dash/users'>View User Settings</Link>
      </p>
    </section>
  );

  return content;
}

export default Welcome;
