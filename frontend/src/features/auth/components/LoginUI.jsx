import { Link } from 'react-router-dom';
import { FORM_FIELDS, PATH, TITLE, UI } from '../../../config/constants';
import useTitle from '../../../hooks/useTitle';

function LoginHeader() {
  return (
    <header>
      <h1>{UI.PUBLIC.login}</h1>
    </header>
  );
}

function LoginForm({
  username,
  password,
  errMsg,
  errRef,
  userRef,
  errClass,
  persist,
  handleUserInput,
  handlePwdInput,
  handleToggle,
  handleSubmit,
}) {
  return (
    <>
      <p ref={errRef} className={errClass} aria-live='assertive'>
        {errMsg}
      </p>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='username'>{FORM_FIELDS.LOGIN.username}</label>
        <input
          className='form__input'
          type='text'
          id='username'
          ref={userRef}
          value={username}
          onChange={handleUserInput}
          autoComplete='off'
          required
        />
        <label htmlFor='password'>{FORM_FIELDS.LOGIN.password}</label>
        <input
          className='form__input'
          type='password'
          id='password'
          value={password}
          onChange={handlePwdInput}
          required
        />
        <button className='form__submit-button'>{FORM_FIELDS.LOGIN.button}</button>
        <label htmlFor='persist' className='form__persist'>
          <input
            type='checkbox'
            className='form__checkbox'
            id='persist'
            onChange={handleToggle}
            checked={persist}
          />
          {FORM_FIELDS.LOGIN.trustDevice}
        </label>
      </form>
    </>
  );
}

function LoginFooter() {
  return (
    <footer>
      <Link to={PATH.root}>{UI.PUBLIC.backHome}</Link>
    </footer>
  );
}

function LoginUI({
  username,
  password,
  errMsg,
  errRef,
  userRef,
  errClass,
  persist,
  handleUserInput,
  handlePwdInput,
  handleToggle,
  handleSubmit,
}) {
  useTitle(`${TITLE.PUBLIC.companyInitials} ${TITLE.placeholder} ${TITLE.PUBLIC.login}`);

  return (
    <section className='public'>
      <LoginHeader />
      <main className='login'>
        <LoginForm
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
      </main>
      <LoginFooter />
    </section>
  );
}

export default LoginUI;
