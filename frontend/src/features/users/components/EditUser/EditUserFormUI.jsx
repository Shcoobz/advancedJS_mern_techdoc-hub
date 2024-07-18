import useTitle from '../../../../hooks/useTitle';
import { SaveButton, DeleteButton } from '../../../../components/common/Buttons.jsx';
import { TITLE, UI } from '../../../../config/constants.js';
import {
  onUsernameChanged,
  onPasswordChanged,
  onRolesChanged,
  onActiveChanged,
  onSaveUserClicked,
  onDeleteUserClicked,
} from '../../utils/userEventHandlers.js';

function EditUserFormUI({ editUserFormProps }) {
  useTitle(`${TITLE.PUBLIC.companyInitials} ${TITLE.placeholder} ${TITLE.USER.edit}`);

  const {
    errClass,
    errContent,
    validUserClass,
    validPwdClass,
    validRolesClass,
    username,
    password,
    roles,
    active,
    canSave,
    options,
    setUsername,
    setPassword,
    setRoles,
    setActive,
    updateUser,
    deleteUser,
    userDetails,
  } = editUserFormProps;

  async function saveUserHandler(e) {
    return onSaveUserClicked(e, updateUser, userDetails);
  }

  async function deleteUserHandler(e) {
    return onDeleteUserClicked(e, deleteUser, userDetails.id);
  }

  return (
    <>
      <p className={errClass}>{errContent}</p>

      <form className='form' onSubmit={(e) => e.preventDefault()}>
        <div className='form__title-row'>
          <h2>Edit User</h2>
          <div className='form__action-buttons'>
            <SaveButton onClick={saveUserHandler} disabled={!canSave} />
            <DeleteButton onClick={deleteUserHandler} />
          </div>
        </div>
        <label className='form__label' htmlFor='username'>
          {UI.DASH.USER.LABEL.username}{' '}
          <span className='nowrap'> {UI.DASH.USER.LABEL.usernameRule}</span>
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
          <span className='nowrap'>{UI.DASH.USER.LABEL.passwordRule1}</span>
          <span className='nowrap'> {UI.DASH.USER.LABEL.passwordRule2}</span>
        </label>
        <input
          className={`form__input ${validPwdClass}`}
          id='password'
          name='password'
          type='password'
          value={password}
          onChange={(e) => onPasswordChanged(e, setPassword)}
        />

        <label className='form__label form__checkbox-container' htmlFor='user-active'>
          {UI.DASH.USER.LABEL.active}
          <input
            className='form__checkbox'
            id='user-active'
            name='user-active'
            type='checkbox'
            checked={active}
            onChange={(e) => onActiveChanged(e, setActive)}
          />
        </label>

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

export default EditUserFormUI;
