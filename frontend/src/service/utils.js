import { useEffect } from 'react';
import { goToRoot } from './navigationService.js';
import { REGEX } from '../config/constants.js';

export function useLogoutEffect(isSuccess, navigate) {
  useEffect(() => {
    if (isSuccess) goToRoot(navigate)();
  }, [isSuccess, navigate]);
}

export function getDashClass(pathname) {
  const regexArray = [REGEX.dash, REGEX.notes, REGEX.users];

  return regexArray.every((regex) => !regex.test(pathname))
    ? 'dash-header__container--small'
    : null;
}
