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

export function HomeButton({ onClick }) {
  return (
    <button className='dash-footer__button icon-button' title='Home' onClick={onClick}>
      <FontAwesomeIcon icon={faHouse} />
    </button>
  );
}

export function NewNoteButton({ onClick }) {
  return (
    <button className='icon-button' title='New Note' onClick={onClick}>
      <FontAwesomeIcon icon={faFileCirclePlus} />
    </button>
  );
}

export function NewUserButton({ onClick }) {
  return (
    <button className='icon-button' title='New User' onClick={onClick}>
      <FontAwesomeIcon icon={faUserPlus} />
    </button>
  );
}

export function UserButton({ onClick }) {
  return (
    <button className='icon-button' title='Users' onClick={onClick}>
      <FontAwesomeIcon icon={faUserGear} />
    </button>
  );
}

export function NotesButton({ onClick }) {
  return (
    <button className='icon-button' title='Notes' onClick={onClick}>
      <FontAwesomeIcon icon={faFilePen} />
    </button>
  );
}

export function LogoutButton({ onClick }) {
  return (
    <button className='icon-button' title='Logout' onClick={onClick}>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );
}

export function DeleteButton({ onClick }) {
  return (
    <button className='icon-button' title='Delete' onClick={onClick}>
      <FontAwesomeIcon icon={faTrashCan} />
    </button>
  );
}

export function SaveButton({ onClick, disabled }) {
  return (
    <button className='icon-button' title='Save' onClick={onClick} disabled={disabled}>
      <FontAwesomeIcon icon={faSave} />
    </button>
  );
}

export function EditButton({ onClick }) {
  return (
    <button className='icon-button table__button' title='Edit' onClick={onClick}>
      <FontAwesomeIcon icon={faPenToSquare} />
    </button>
  );
}

HomeButton.propTypes = homeButtonPropTypes;
NewNoteButton.propTypes = newNoteButtonPropTypes;
NewUserButton.propTypes = newUserButtonPropTypes;
UserButton.propTypes = userButtonPropTypes;
NotesButton.propTypes = notesButtonPropTypes;
LogoutButton.propTypes = logoutButtonPropTypes;
DeleteButton.propTypes = deleteButtonPropTypes;
SaveButton.propTypes = saveButtonPropTypes;
EditButton.propTypes = editButtonPropTypes;
