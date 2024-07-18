import useTitle from '../../../../hooks/useTitle';
import { SaveButton } from '../../../../components/common/Buttons';
import { TITLE, UI } from '../../../../config/constants';
import {
  onPasswordChanged,
  onRolesChanged,
  onUsernameChanged,
} from '../../utils/userEventHandlers';

function NewUserFormUI({ newUserFormProps }) {
  useTitle(`${TITLE.PUBLIC.companyInitials} ${TITLE.placeholder} ${TITLE.USER.new}`);

  const {
    username,
    setUsername,
    password,
    setPassword,
    roles,
    setRoles,
    saveUserClicked,
    canSave,
    error,
    errClass,
    validUserClass,
    validPwdClass,
    validRolesClass,
    options,
  } = newUserFormProps;

  return (
    <>
      <p className={errClass}>{error?.data?.message}</p>

      <form className='form' onSubmit={saveUserClicked}>
        <div className='form__title-row'>
          <h2>{UI.DASH.USER.LABEL.userTitle}</h2>
          <div className='form__action-buttons'>
            <SaveButton onClick={saveUserClicked} disabled={!canSave} />
          </div>
        </div>
        <label className='form__label' htmlFor='username'>
          {UI.DASH.USER.LABEL.username}{' '}
          <span className='nowrap'>{UI.DASH.USER.LABEL.usernameRule}</span>
        </label>
        <input
          className={`form__input ${validUserClass}`}
          id='username'
          name='username'
          type='text'
          autoComplete='off'
          value={username}
          onChange={(e) => onUsernameChanged(e, setUsername)}
        />

        <label className='form__label' htmlFor='password'>
          {UI.DASH.USER.LABEL.password}
          <span className='nowrap'>{UI.DASH.USER.LABEL.passwordRule2}</span>
        </label>
        <input
          className={`form__input ${validPwdClass}`}
          id='password'
          name='password'
          type='password'
          value={password}
          onChange={(e) => onPasswordChanged(e, setPassword)}
        />

        <label className='form__label' htmlFor='roles'>
          {UI.DASH.USER.LABEL.assignedRoles}
        </label>
        <select
          id='roles'
          name='roles'
          className={`form__select ${validRolesClass}`}
          multiple={true}
          size='3'
          value={roles}
          onChange={(e) => onRolesChanged(e, setRoles)}>
          {options}
        </select>
      </form>
    </>
  );
}

export default NewUserFormUI;
