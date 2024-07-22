import { useState, useEffect } from 'react';
import { useUpdateUserMutation, useDeleteUserMutation } from '../../api/usersApiSlice';
import { useNavigate } from 'react-router-dom';
import { generateRoleOptions } from '../../utils/userUtils.jsx';
import { editUserFormPropTypes } from '../../../../config/propTypes.js';
import {
  CLASS_NAME,
  CONFIG,
  PATH,
  REGEX,
  REPLACEMENT,
} from '../../../../config/constants';
import {
  getErrClass,
  getErrContent,
  getValidClass,
} from '../../../../service/formUtils.js';
import EditUserFormUI from './EditUserFormUI.jsx';

/**
 * @function EditUserForm
 * @description Manages the state and logic for editing a user's details, including validation, update, and deletion. It handles form input, validation, and navigates on success.
 */
function EditUserForm({ user }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState(user.username);
  const [validUsername, setValidUsername] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [roles, setRoles] = useState(user.roles);
  const [active, setActive] = useState(user.active);

  const [updateUser, { isLoading, isSuccess, isError, error }] = useUpdateUserMutation();
  const [deleteUser, { isSuccess: isDelSuccess, isError: isDelError, error: delerror }] =
    useDeleteUserMutation();

  const userDetails = { id: user.id, username, password, roles, active };
  const canSave = password
    ? [roles.length, validUsername, validPassword].every(Boolean) && !isLoading
    : [roles.length, validUsername].every(Boolean) && !isLoading;

  const options = generateRoleOptions(Object.values(CONFIG.ROLE));

  const errClass = getErrClass(isError, isDelError);
  const errContent = getErrContent(error, delerror);
  const validUserClass = getValidClass(
    validUsername,
    CLASS_NAME.formInputIncomplete,
    REPLACEMENT.emptyString
  );
  const validPwdClass = getValidClass(
    validPassword,
    CLASS_NAME.formInputIncomplete,
    REPLACEMENT.emptyString
  );
  const validRolesClass = getValidClass(
    roles.length,
    CLASS_NAME.formInputIncomplete,
    REPLACEMENT.emptyString
  );

  /**
   * @function useEffect
   * @description Validates the username using a regex pattern whenever the `username` state changes.
   */
  useEffect(() => {
    setValidUsername(REGEX.usernameCheck.test(username));
  }, [username]);

  /**
   * @function useEffect
   * @description Validates the password using a regex pattern whenever the `password` state changes.
   */
  useEffect(() => {
    setValidPassword(REGEX.passwordCheck.test(password));
  }, [password]);

  /**
   * @function useEffect
   * @description Clears form fields and navigates to the user overview page when either update or delete operations are successful.
   */
  useEffect(() => {
    if (isSuccess || isDelSuccess) {
      setUsername(REPLACEMENT.emptyString);
      setPassword(REPLACEMENT.emptyString);
      setRoles(REPLACEMENT.emptyArray);
      navigate(PATH.DASH.USER.overview);
    }
  }, [isSuccess, isDelSuccess, navigate]);

  const editUserFormProps = {
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
  };

  return <EditUserFormUI editUserFormProps={editUserFormProps} />;
}

/**
 * @constant propTypes
 * @description Defines the prop types for the `EditUserForm` component, specifying the expected structure and types of props.
 */
EditUserForm.propTypes = editUserFormPropTypes;

export default EditUserForm;
