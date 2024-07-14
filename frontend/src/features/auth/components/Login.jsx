import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../state/authSlice';
import { useLoginMutation } from '../api/authApiSlice';
import { CLASS_NAME, PATH, REGEX } from '../../../config/constants';

import useFormData from '../../../hooks/useFormData';
import getErrorMessage from '../utils/handleLoginErr';
import Spinner from '../../../components/common/Spinner';
import LoginUI from './LoginUI';

function Login() {
  const { username, password, persist, handleUserInput, handlePwdInput, handleToggle } =
    useFormData();
  const [errMsg, setErrMsg] = useState(REGEX.emptyString);
  const [login, { isLoading }] = useLoginMutation();
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errClass = errMsg ? CLASS_NAME.errorMsg : CLASS_NAME.offscreen;

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg(REGEX.emptyString);
  }, [username, password]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { accessToken } = await login({ username, password }).unwrap();

      dispatch(setCredentials({ accessToken }));
      navigate(PATH.DASH.baseUrl);
    } catch (err) {
      const message = getErrorMessage(err);

      setErrMsg(message);
      errRef.current.focus();
    }
  }

  if (isLoading) return <Spinner />;

  const content = (
    <LoginUI
      username={username}
      password={password}
      errMsg={errMsg}
      errRef={errRef}
      userRef={userRef}
      errClass={errClass}
      persist={persist}
      handleUserInput={handleUserInput}
      handlePwdInput={handlePwdInput}
      handleToggle={handleToggle}
      handleSubmit={handleSubmit}
    />
  );

  return content;
}

export default Login;
