import { Outlet } from 'react-router-dom';
import DashHeader from './DashHeader';
import DashFooter from './DashFooter';

/**
 * @function DashLayout
 * @description Layout component for the dashboard, including header, footer, and main content area.
 */
function DashLayout() {
  const content = (
    <>
      <DashHeader />
      <div className='dash-container'>
        <Outlet />
      </div>
      <DashFooter />
    </>
  );

  return content;
}

export default DashLayout;
