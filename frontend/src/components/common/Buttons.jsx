import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faFileCirclePlus,
  faUserPlus,
  faUserGear,
  faFilePen,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

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
