import { CONFIG, REGEX, REPLACEMENT, UI } from '../../../config/constants';

export function formatDate(date) {
  return new Intl.DateTimeFormat(CONFIG.DATE.locale, {
    dateStyle: CONFIG.DATE.dateStyle,
    timeStyle: CONFIG.DATE.timeStyle,
  })
    .format(date)
    .replace(REGEX.removePeriodSpace, REPLACEMENT.singleSpace);
}

export function replaceUsername(template, username) {
  return template.replace(UI.DASH.templateUsername, username);
}
