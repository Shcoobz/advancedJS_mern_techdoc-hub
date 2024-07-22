import { Outlet } from 'react-router-dom';
import DashHeader from './DashHeader';
import DashFooter from './DashFooter';

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
