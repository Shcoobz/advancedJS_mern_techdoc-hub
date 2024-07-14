import React from 'react';
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
import { REGEX, PATH } from '../config/constants.js';

export function getButtonsConfig(pathname, navigate, isManager, isAdmin) {
  const buttonsConfig = [
    {
      key: 'new-note',
      condition: REGEX.notes.test(pathname),
      element: <NewNoteButton onClick={goToNewNotePage(navigate)} />,
    },
    {
      key: 'new-user',
      condition: REGEX.users.test(pathname),
      element: <NewUserButton onClick={goToNewUserPage(navigate)} />,
    },
    {
      key: 'user',
      condition: isManager || isAdmin,
      subCondition: !REGEX.users.test(pathname) && pathname.includes(PATH.DASH.baseUrl),
      element: <UserButton onClick={goToUsersPage(navigate)} />,
    },
    {
      key: 'notes',
      condition: !REGEX.notes.test(pathname) && pathname.includes(PATH.DASH.baseUrl),
      element: <NotesButton onClick={goToNotesPage(navigate)} />,
    },
  ];

  return buttonsConfig
    .filter(({ condition, subCondition = true }) => condition && subCondition)
    .map(({ key, element }) => <React.Fragment key={key}>{element}</React.Fragment>);
}
