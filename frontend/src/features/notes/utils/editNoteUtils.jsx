import { CONFIG } from '../../../config/constants';

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

export function generateUserOptions(users) {
  return users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.username}
    </option>
  ));
}
