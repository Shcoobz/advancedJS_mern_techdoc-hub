import React from 'react';
import { REGEX, PATH, CONFIG } from '../config/constants.js';
import {
  NewNoteButton,
  NewUserButton,
  UserButton,
  NotesButton,
} from '../components/common/Buttons.jsx';
import {
  goToNewNotePage,
  goToNewUserPage,
  goToNotesPage,
  goToUsersPage,
} from './navigationService.js';

export function getButtonsConfig(pathname, navigate, isManager, isAdmin) {
  const buttonsConfig = [
    {
      key: CONFIG.BUTTON_KEY.newNote,
      condition: REGEX.notes.test(pathname),
      element: <NewNoteButton onClick={goToNewNotePage(navigate)} />,
    },
    {
      key: CONFIG.BUTTON_KEY.newUser,
      condition: REGEX.users.test(pathname),
      element: <NewUserButton onClick={goToNewUserPage(navigate)} />,
    },
    {
      key: CONFIG.BUTTON_KEY.user,
      condition: isManager || isAdmin,
      subCondition: !REGEX.users.test(pathname) && pathname.includes(PATH.DASH.baseUrl),
      element: <UserButton onClick={goToUsersPage(navigate)} />,
    },
    {
      key: CONFIG.BUTTON_KEY.notes,
      condition: !REGEX.notes.test(pathname) && pathname.includes(PATH.DASH.baseUrl),
      element: <NotesButton onClick={goToNotesPage(navigate)} />,
    },
  ];

  return buttonsConfig
    .filter(({ condition, subCondition = true }) => condition && subCondition)
    .map(({ key, element }) => <React.Fragment key={key}>{element}</React.Fragment>);
}
