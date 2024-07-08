import { Link } from 'react-router-dom';

function Public() {
  const content = (
    <section className='public'>
      <header>
        <h1>
          Welcome to <span className='nowrap'>[ Company Name ]!</span>
        </h1>
      </header>
      <main className='public__main'>
        <h2>
          <i>[ Company Description ]:</i>
        </h2>
        <br />
        <p>
          Tempor dolor nulla deserunt in dolore elit. In eu ut sunt laborum occaecat
          exercitation amet sunt ex cillum aliqua cillum mollit. Proident officia id
          laboris commodo incididunt nulla et amet. Ipsum excepteur eiusmod sint dolor
          pariatur consectetur nisi in. Nulla nulla culpa ut anim aliqua ea reprehenderit
          irure qui. Mollit consequat elit voluptate sit et elit pariatur labore occaecat.
          Duis sint dolore nulla Lorem in. Consectetur culpa ipsum enim sunt nulla
          cupidatat ad ea. Culpa id velit aliquip quis do minim aute mollit ullamco
          adipisicing officia velit.In exercitation quis dolore aliquip incididunt.
          Ullamco cupidatat elit quis amet laborum. Ipsum culpa non occaecat ullamco
          exercitation cillum eiusmod eiusmod aute ullamco mollit. Exercitation ut sint
          nulla laboris anim sit mollit eiusmod ex velit commodo et ex minim. Dolor Lorem
          est amet pariatur quis do exercitation.
        </p>
        <br />
        <p>
          Tempor dolor nulla deserunt in dolore elit. In eu ut sunt laborum occaecat
          exercitation amet sunt ex cillum aliqua cillum mollit. Proident officia id
          laboris commodo incididunt nulla et amet. Ipsum excepteur eiusmod sint dolor
          pariatur consectetur nisi in. Nulla nulla culpa ut anim aliqua ea reprehenderit
          irure qui. Mollit consequat elit voluptate sit et elit pariatur labore occaecat.
          Duis sint dolore nulla Lorem in. Consectetur culpa ipsum enim sunt nulla
          cupidatat ad ea. Culpa id velit aliquip quis do minim aute mollit ullamco
          adipisicing officia velit.In exercitation quis dolore aliquip incididunt.
          Ullamco cupidatat elit quis amet laborum. Ipsum culpa non occaecat ullamco
          exercitation cillum eiusmod eiusmod aute ullamco mollit. Exercitation ut sint
          nulla laboris anim sit mollit eiusmod ex velit commodo et ex minim. Dolor Lorem
          est amet pariatur quis do exercitation.
        </p>
        <br />

        <address className='public__addr'>
          <br />
          <h2>[ Company Details ]:</h2>
          <br />
          [ Company Name ]
          <br />
          [ Street ]
          <br />
          [ City ]
          <br />
          <a href='tel:+431234567890'>[ Phone Number ]</a>
        </address>
        <br />
        <p>[ Owner Name ]</p>
      </main>
      <footer>
        <Link to='/login'>Employee Login</Link>
      </footer>
    </section>
  );

  return content;
}

export default Public;
