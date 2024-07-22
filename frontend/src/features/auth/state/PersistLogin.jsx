import { Outlet, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './authSlice.js';
import { useRefreshMutation } from '../api/authApiSlice.js';
import { CONFIG, PATH, UI } from '../../../config/constants.js';
import usePersist from '../../../hooks/usePersist.js';
import Spinner from '../../../components/common/Spinner.jsx';

/**
 * @function PersistLogin
 * @description Component to handle persistent login, verifying and refreshing tokens as needed.
 */
function PersistLogin() {
  const [persist] = usePersist();
  const [trueSuccess, setTrueSuccess] = useState(false);
  const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useRefreshMutation();
  const token = useSelector(selectCurrentToken);
  const effectRan = useRef(false);

  /**
   * @function useEffect
   * @description Effect hook to verify refresh token on component mount or when conditions change.
   */
  useEffect(() => {
    if (effectRan.current === true || import.meta.env.VITE_NODE_ENV !== CONFIG.NODE.env) {
      // React 18 Strict Mode
      verifyRefreshToken();

      if (!token && persist) verifyRefreshToken();
    }

    return cleanup;

    // eslint-disable-next-line
  }, []);

  /**
   * @function verifyRefreshToken
   * @description Async function to refresh authentication token and set success state.
   */
  async function verifyRefreshToken() {
    try {
      await refresh();
      setTrueSuccess(true); // extra time for setting credentials
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * @function cleanup
   * @description Cleanup function to update effectRan reference.
   */
  function cleanup() {
    effectRan.current = true;
  }

  let content;

  if (!persist) {
    // persist: no
    content = <Outlet />;
  } else if (isLoading) {
    //persist: yes, token: no
    content = <Spinner />;
  } else if (isError) {
    //persist: yes, token: no
    content = (
      <p className='errmsg'>
        {`${error?.data?.message} - `}
        <Link to={PATH.login}>{UI.PUBLIC.loginAgain}</Link>.
      </p>
    );
  } else if (isSuccess && trueSuccess) {
    //persist: yes, token: yes
    content = <Outlet />;
  } else if (token && isUninitialized) {
    //persist: yes, token: yes
    content = <Outlet />;
  }

  return content;
}

export default PersistLogin;
