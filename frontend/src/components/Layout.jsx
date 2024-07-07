import { Outlet } from 'react-router-dom';

function Layout() {
  const content = <Outlet />;

  return content;
}

export default Layout;
