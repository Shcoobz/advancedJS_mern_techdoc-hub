import { CONFIG, REGEX, REPLACEMENT } from '../../../config/constants';

/**
 * @function formatDate
 * @description Formats a date string into a locale-specific string with detailed date and time options.
 */
export function formatDate(dateString, locale = CONFIG.DATE.locale) {
  const options = {
    day: CONFIG.DATE.numeric,
    month: CONFIG.DATE.long,
    year: CONFIG.DATE.numeric,
    hour: CONFIG.DATE.numeric,
    minute: CONFIG.DATE.numeric,
    second: CONFIG.DATE.numeric,
  };

  return new Date(dateString).toLocaleString(locale, options);
}

/**
 * @function formatDateSimple
 * @description Formats a date string into a locale-specific string with only day, month, and year, removing any trailing periods.
 */
export function formatDateSimple(dateString) {
  const options = {
    day: CONFIG.DATE.numeric,
    month: CONFIG.DATE.long,
    year: CONFIG.DATE.numeric,
  };

  return new Date(dateString)
    .toLocaleString(CONFIG.DATE.locale, options)
    .replace(REGEX.removePeriodSpace, REPLACEMENT.singleSpace);
}

/**
 * @function generateUserOptions
 * @description Generates an array of `<option>` elements from a list of users for use in a select input.
 */
export function generateUserOptions(users) {
  return users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.username}
    </option>
  ));
}
