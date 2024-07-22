import { Outlet } from 'react-router-dom';

/**
 * @function Layout
 * @description Basic layout component that renders the current route's content.
 */
function Layout() {
  const content = <Outlet />;

  return content;
}

export default Layout;
