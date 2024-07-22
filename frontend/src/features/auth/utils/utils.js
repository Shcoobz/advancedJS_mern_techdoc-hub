import { CONFIG, REGEX, REPLACEMENT, UI } from '../../../config/constants';

/**
 * @function formatDate
 * @description Formats a date according to the specified locale, date style, and time style, replacing periods followed by spaces with a single space.
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat(CONFIG.DATE.locale, {
    dateStyle: CONFIG.DATE.dateStyle,
    timeStyle: CONFIG.DATE.timeStyle,
  })
    .format(date)
    .replace(REGEX.removePeriodSpace, REPLACEMENT.singleSpace);
}

/**
 * @function replaceUsername
 * @description Replaces the placeholder username in a template string with the actual username.
 */
export function replaceUsername(template, username) {
  return template.replace(UI.DASH.templateUsername, username);
}
