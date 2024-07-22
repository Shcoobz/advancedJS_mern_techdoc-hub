import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faFileCirclePlus,
  faUserPlus,
  faUserGear,
  faFilePen,
  faRightFromBracket,
  faTrashCan,
  faSave,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
  deleteButtonPropTypes,
  editButtonPropTypes,
  homeButtonPropTypes,
  logoutButtonPropTypes,
  newNoteButtonPropTypes,
  newUserButtonPropTypes,
  notesButtonPropTypes,
  saveButtonPropTypes,
  userButtonPropTypes,
} from '../../config/propTypes';

/**
 * @function HomeButton
 * @description Button component for navigating to the home page.
 */
export function HomeButton({ onClick }) {
  return (
    <button className='dash-footer__button icon-button' title='Home' onClick={onClick}>
      <FontAwesomeIcon icon={faHouse} />
    </button>
  );
}

/**
 * @function NewNoteButton
 * @description Button component for creating a new note.
 */
export function NewNoteButton({ onClick }) {
  return (
    <button className='icon-button' title='New Note' onClick={onClick}>
      <FontAwesomeIcon icon={faFileCirclePlus} />
    </button>
  );
}

/**
 * @function NewUserButton
 * @description Button component for creating a new user.
 */
export function NewUserButton({ onClick }) {
  return (
    <button className='icon-button' title='New User' onClick={onClick}>
      <FontAwesomeIcon icon={faUserPlus} />
    </button>
  );
}

/**
 * @function UserButton
 * @description Button component for navigating to the users page.
 */
export function UserButton({ onClick }) {
  return (
    <button className='icon-button' title='Users' onClick={onClick}>
      <FontAwesomeIcon icon={faUserGear} />
    </button>
  );
}

/**
 * @function NotesButton
 * @description Button component for navigating to the notes page.
 */
export function NotesButton({ onClick }) {
  return (
    <button className='icon-button' title='Notes' onClick={onClick}>
      <FontAwesomeIcon icon={faFilePen} />
    </button>
  );
}

/**
 * @function LogoutButton
 * @description Button component for logging out.
 */
export function LogoutButton({ onClick }) {
  return (
    <button className='icon-button' title='Logout' onClick={onClick}>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );
}

/**
 * @function DeleteButton
 * @description Button component for deleting an item.
 */
export function DeleteButton({ onClick }) {
  return (
    <button className='icon-button' title='Delete' onClick={onClick}>
      <FontAwesomeIcon icon={faTrashCan} />
    </button>
  );
}

/**
 * @function SaveButton
 * @description Button component for saving changes.
 */
export function SaveButton({ onClick, disabled }) {
  return (
    <button className='icon-button' title='Save' onClick={onClick} disabled={disabled}>
      <FontAwesomeIcon icon={faSave} />
    </button>
  );
}

/**
 * @function EditButton
 * @description Button component for editing an item.
 */
export function EditButton({ onClick }) {
  return (
    <button className='icon-button table__button' title='Edit' onClick={onClick}>
      <FontAwesomeIcon icon={faPenToSquare} />
    </button>
  );
}

/**
 * @constant ButtonPropTypes
 * @description Prop types for various button components.
 */
HomeButton.propTypes = homeButtonPropTypes;
NewNoteButton.propTypes = newNoteButtonPropTypes;
NewUserButton.propTypes = newUserButtonPropTypes;
UserButton.propTypes = userButtonPropTypes;
NotesButton.propTypes = notesButtonPropTypes;
LogoutButton.propTypes = logoutButtonPropTypes;
DeleteButton.propTypes = deleteButtonPropTypes;
SaveButton.propTypes = saveButtonPropTypes;
EditButton.propTypes = editButtonPropTypes;
