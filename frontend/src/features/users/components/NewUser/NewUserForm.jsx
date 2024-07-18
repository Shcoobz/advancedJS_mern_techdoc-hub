import { useState, useEffect } from 'react';
import { useAddNewUserMutation } from '../../api/usersApiSlice';
import { getErrClass, getValidClass } from '../../../../service/formUtils';
import { useNavigate } from 'react-router-dom';
import { generateRoleOptions } from '../../utils/userUtils';
import {
  CLASS_NAME,
  CONFIG,
  PATH,
  REGEX,
  REPLACEMENT,
} from '../../../../config/constants';

import NewUserFormUI from '../NewUser/NewUserFormUI';

function NewUserForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(REPLACEMENT.emptyString);
  const [validUsername, setValidUsername] = useState(false);
  const [password, setPassword] = useState(REPLACEMENT.emptyString);
  const [validPassword, setValidPassword] = useState(false);
  const [roles, setRoles] = useState([CONFIG.ROLE.employee]);

  const [addNewUser, { isLoading, isSuccess, isError, error }] = useAddNewUserMutation();
  const canSave =
    [roles.length, validUsername, validPassword].every(Boolean) && !isLoading;
  const options = generateRoleOptions(Object.values(CONFIG.ROLE));

  const errClass = getErrClass(isError);
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

  useEffect(() => {
    setValidUsername(REGEX.usernameCheck.test(username));
  }, [username]);

  useEffect(() => {
    setValidPassword(REGEX.passwordCheck.test(password));
  }, [password]);

  useEffect(() => {
    if (isSuccess) {
      setUsername(REPLACEMENT.emptyString);
      setPassword(REPLACEMENT.emptyString);
      setRoles(REPLACEMENT.emptyArray);
      navigate(PATH.DASH.USER.overview);
    }
  }, [isSuccess, navigate, setUsername, setPassword, setRoles]);

  async function saveUserClicked(e) {
    e.preventDefault();

    if (canSave) {
      await addNewUser({ username, password, roles });
    }
  }

  const newUserFormProps = {
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
  };

  return <NewUserFormUI newUserFormProps={newUserFormProps} />;
}

export default NewUserForm;
