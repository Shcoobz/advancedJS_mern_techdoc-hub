import { Link } from 'react-router-dom';
import { PATH, UI } from '../config/constants';

function Public() {
  const headerContent = (
    <header>
      <h1>
        {UI.PUBLIC.TEXT.welcome}
        <span className='nowrap'>{UI.PUBLIC.COMPANY.HEADER.name}</span>
      </h1>
    </header>
  );

  const aboutCompanyContent = (
    <>
      <h2>
        <i>{UI.PUBLIC.COMPANY.HEADER.details}</i>
      </h2>
      <br />
      <p>{UI.PUBLIC.TEXT.paragraphOne}</p>
      <br />
      <p>{UI.PUBLIC.TEXT.paragraphTwo}</p>
      <br />
    </>
  );

  const addressContent = (
    <>
      <br />
      <h2>{UI.PUBLIC.COMPANY.HEADER.details}</h2>
      <br />
      {UI.PUBLIC.COMPANY.INFO.name}
      <br />
      {UI.PUBLIC.COMPANY.INFO.street}
      <br />
      {UI.PUBLIC.COMPANY.INFO.city}
      <br />
      <a href={UI.PUBLIC.COMPANY.INFO.phoneLink}>{UI.PUBLIC.COMPANY.INFO.phoneNumber}</a>
    </>
  );

  const ownerContent = (
    <>
      <br />
      <p> {UI.PUBLIC.COMPANY.INFO.ownerName}</p>{' '}
    </>
  );

  const mainContent = (
    <main className='public__main'>
      {aboutCompanyContent}

      <address className='public__addr'>{addressContent}</address>

      {ownerContent}
    </main>
  );

  const content = (
    <section className='public'>
      {headerContent}
      {mainContent}
      <footer>
        <Link to={PATH.LOGIN}>{UI.PUBLIC.LOGIN}</Link>
      </footer>
    </section>
  );

  return content;
}

export default Public;
