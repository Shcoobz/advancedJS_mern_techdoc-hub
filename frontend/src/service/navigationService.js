import { PATH } from '../config/constants';

function navigateTo(navigate, path) {
  return function () {
    navigate(path);
  };
}

export function goToRoot(navigate) {
  return navigateTo(navigate, '/');
}

export function goHome(navigate) {
  return navigateTo(navigate, PATH.DASH.baseUrl);
}

export function goToNewNotePage(navigate) {
  return navigateTo(navigate, '/dash/notes/new');
}

export function goToNewUserPage(navigate) {
  return navigateTo(navigate, '/dash/users/new');
}

export function goToNotesPage(navigate) {
  return navigateTo(navigate, '/dash/notes');
}

export function goToUsersPage(navigate) {
  return navigateTo(navigate, '/dash/users');
}

export function goToNoteId(navigate, noteId) {
  return navigateTo(navigate, `/dash/notes/${noteId}`);
}
