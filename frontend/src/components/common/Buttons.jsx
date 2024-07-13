import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export function HomeButton({ onGoHomeClicked }) {
  return (
    <button
      className='dash-footer__button icon-button'
      title='Home'
      onClick={onGoHomeClicked}>
      <FontAwesomeIcon icon={faHouse} />
    </button>
  );
}
