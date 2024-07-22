import { useState } from 'react';
import { REPLACEMENT } from '../config/constants';

/**
 * @function useFormData
 * @desc Custom hook to manage form state, including username, password, and a persist flag with handlers for input changes and toggles.
 */
function useFormData(
  initialUsername = REPLACEMENT.emptyString,
  initialPassword = REPLACEMENT.emptyString,
  initialPersist = false
) {
  const [username, setUsername] = useState(initialUsername);
  const [password, setPassword] = useState(initialPassword);
  const [persist, setPersist] = useState(initialPersist);

  /**
   * @function handleUserInput
   * @desc Updates the username state with the value from the input event.
   */
  function handleUserInput(e) {
    setUsername(e.target.value);
  }

  /**
   * @function handlePwdInput
   * @desc Updates the password state with the value from the input event.
   */
  function handlePwdInput(e) {
    setPassword(e.target.value);
  }

  /**
   * @function handleToggle
   * @desc Toggles the persist state between true and false.
   */
  function handleToggle() {
    setPersist((prev) => !prev);
  }

  return {
    username,
    password,
    persist,
    handleUserInput,
    handlePwdInput,
    handleToggle,
  };
}

export default useFormData;
