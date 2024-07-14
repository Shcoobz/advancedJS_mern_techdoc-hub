import { useState } from 'react';
import { REGEX } from '../config/constants';

function useFormData(
  initialUsername = REGEX.emptyString,
  initialPassword = REGEX.emptyString,
  initialPersist = false
) {
  const [username, setUsername] = useState(initialUsername);
  const [password, setPassword] = useState(initialPassword);
  const [persist, setPersist] = useState(initialPersist);

  function handleUserInput(e) {
    setUsername(e.target.value);
  }

  function handlePwdInput(e) {
    setPassword(e.target.value);
  }

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
