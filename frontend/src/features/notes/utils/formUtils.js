import { CLASS_NAME, REPLACEMENT } from '../../../config/constants';

export function getErrClass(isError, isDelError) {
  return isError || isDelError ? CLASS_NAME.errorMsg : CLASS_NAME.offscreen;
}

export function getValidClass(value, className, replacement) {
  return !value ? className : replacement;
}

export function getErrContent(error, delerror) {
  return (error?.data?.message || delerror?.data?.message) ?? REPLACEMENT.emptyString;
}
