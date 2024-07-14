import { Link } from 'react-router-dom';
import { FORM_FIELDS, PATH, UI } from '../../../config/constants';

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
  return (
    <section className='public'>
      <header>
        <h1>{UI.PUBLIC.login}</h1>
      </header>
      <main className='login'>
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
      </main>
      <footer>
        <Link to={PATH.root}>{UI.PUBLIC.backHome}</Link>
      </footer>
    </section>
  );
}

export default LoginUI;
