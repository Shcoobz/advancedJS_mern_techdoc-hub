import { CONFIG } from '../config/constants';
import { getStatus } from './sortingService';

function matchesDate(dateString, searchTerm) {
  const date = new Date(dateString);
  const year = date.getFullYear().toString();
  const month = date
    .toLocaleString(CONFIG.DATE.locale, { month: CONFIG.DATE.long })
    .toLowerCase();
  const day = date.getDate().toString();

  const yearMatches = searchTerm.length >= 3 && year.includes(searchTerm);
  const monthMatches = month.includes(searchTerm);
  const dayMatches = day.includes(searchTerm);

  return yearMatches || monthMatches || dayMatches;
}

function matchesUser(entity, searchTerm) {
  const usernameMatches = entity.username.toLowerCase().includes(searchTerm);
  const roleMatches = entity.roles.some((role) =>
    role.toLowerCase().includes(searchTerm)
  );

  return usernameMatches || roleMatches;
}

function matchesNote(entity, searchTerm) {
  const titleMatches = entity.title.toLowerCase().includes(searchTerm);
  const userMatches =
    entity.username && entity.username.toLowerCase().includes(searchTerm);
  const statusMatches = getStatus(entity.completed).toLowerCase().includes(searchTerm);
  const createdAtMatches = entity.createdAt && matchesDate(entity.createdAt, searchTerm);
  const updatedAtMatches = entity.updatedAt && matchesDate(entity.updatedAt, searchTerm);

  return (
    titleMatches || userMatches || statusMatches || createdAtMatches || updatedAtMatches
  );
}

export function filterBySearchTerm(ids, entities, searchTerm) {
  if (!searchTerm) return ids;

  searchTerm = searchTerm.toLowerCase();

  return ids.filter((id) => {
    const entity = entities[id];
    const user = entity.username && entity.roles;
    const note = entity.title && (entity.createdAt || entity.updatedAt);
    let matches = false;

    if (user) {
      matches = matchesUser(entity, searchTerm);
    }

    if (note) {
      matches = matchesNote(entity, searchTerm);
    }

    return matches;
  });
}
