import { useEffect } from 'react';
import { goToRoot } from './navigationService.js';
import { CLASS_NAME, REGEX } from '../config/constants.js';

/**
 * @function useLogoutEffect
 * @desc React hook that navigates to the root path when logout is successful.
 */
export function useLogoutEffect(isSuccess, navigate) {
  useEffect(() => {
    if (isSuccess) goToRoot(navigate)();
  }, [isSuccess, navigate]);
}

/**
 * @function getDashClass
 * @desc Determines the CSS class for the dashboard container based on the current pathname.
 */
export function getDashClass(pathname) {
  const regexArray = [REGEX.dash, REGEX.notes, REGEX.users];

  return regexArray.every((regex) => !regex.test(pathname))
    ? CLASS_NAME.containerSmall
    : null;
}
