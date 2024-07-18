import { PATH } from '../config/constants';

function navigateTo(navigate, path) {
  return function () {
    navigate(path);
  };
}

export function goToRoot(navigate) {
  return navigateTo(navigate, PATH.root);
}

//  private
export function goHome(navigate) {
  return navigateTo(navigate, PATH.DASH.baseUrl);
}

// users
export function goToUsersPage(navigate) {
  return navigateTo(navigate, PATH.DASH.USER.overview);
}

export function goToNewUserPage(navigate) {
  return navigateTo(navigate, PATH.DASH.USER.new);
}

export function goToUserId(navigate, userId) {
  return navigateTo(navigate, PATH.DASH.USER.userId(userId));
}

// notes
export function goToNotesPage(navigate) {
  return navigateTo(navigate, PATH.DASH.NOTE.overview);
}

export function goToNewNotePage(navigate) {
  return navigateTo(navigate, PATH.DASH.NOTE.new);
}

export function goToNoteId(navigate, noteId) {
  return navigateTo(navigate, PATH.DASH.NOTE.noteId(noteId));
}
