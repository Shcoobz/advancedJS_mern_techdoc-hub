import { Outlet, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentToken } from './authSlice';
import { useRefreshMutation } from './authApiSlice';

import usePersist from '../../hooks/usePersist';

function PersistLogin() {
  const [persist] = usePersist();
  const token = useSelector(selectCurrentToken);
  const effectRan = useRef(false);

  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useRefreshMutation();

  useEffect(() => {
    if (effectRan.current === true || import.meta.env.VITE_NODE_ENV !== 'development') {
      // React 18 Strict Mode
      verifyRefreshToken();

      if (!token && persist) verifyRefreshToken();
    }

    return cleanup;

    // eslint-disable-next-line
  }, []);

  async function verifyRefreshToken() {
    console.log('PersistLogin: verifying refresh token');
    try {
      //const response =
      await refresh();
      //const { accessToken } = response.data
      setTrueSuccess(true); // extra time for setting credentials
    } catch (err) {
      console.error(err);
    }
  }

  function cleanup() {
    console.log('PersistLogin: cleanup');
    effectRan.current = true;
  }

  let content;

  if (!persist) {
    // persist: no
    console.log('PersistLogin: no persist');
    content = <Outlet />;
  } else if (isLoading) {
    //persist: yes, token: no
    console.log('PersistLogin: loading');
    content = <p>Loading...</p>;
  } else if (isError) {
    //persist: yes, token: no
    console.log('error');

    content = (
      <p className='errmsg'>
        {error?.data?.message}
        <Link to='/login'>Please login again</Link>.
      </p>
    );
  } else if (isSuccess && trueSuccess) {
    //persist: yes, token: yes
    console.log('PersistLogin: success');
    content = <Outlet />;
  } else if (token && isUninitialized) {
    //persist: yes, token: yes
    console.log('PersistLogin: token and uninit');
    console.log(isUninitialized);
    content = <Outlet />;
  }

  return content;
}

export default PersistLogin;
