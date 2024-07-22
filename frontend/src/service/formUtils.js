import { CLASS_NAME, REPLACEMENT } from '../config/constants';

/**
 * @function getErrClass
 * @desc Returns a CSS class name based on the error state, indicating whether to show an error message.
 */
export function getErrClass(isError, isDelError) {
  return isError || isDelError ? CLASS_NAME.errorMsg : CLASS_NAME.offscreen;
}

/**
 * @function getValidClass
 * @desc Returns a CSS class name based on the validity of a value, indicating whether the input is valid or invalid.
 */
export function getValidClass(value, className, replacement) {
  return !value ? className : replacement;
}

/**
 * @function getErrContent
 * @desc Returns the error message from the error or delete error object, defaulting to an empty string if none exists.
 */
export function getErrContent(error, delerror) {
  return (error?.data?.message || delerror?.data?.message) ?? REPLACEMENT.emptyString;
}
