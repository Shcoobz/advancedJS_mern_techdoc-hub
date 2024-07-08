import { Link } from 'react-router-dom';

function DashHeader() {
  const content = (
    <header className='dash-header'>
      <div className='dash-header__container'>
        <Link to='/dash'>
          <h1 className='dash-header__title'>Tech Doc</h1>
        </Link>
        <nav className='dash-header__nav'>{/* TODO: add nav buttons later */}</nav>
      </div>
    </header>
  );

  return content;
}

export default DashHeader;