import PulseLoader from 'react-spinners/PulseLoader';
import { LOADER_COLOR } from '../../config/constants';

function Spinner() {
  return <PulseLoader color={LOADER_COLOR} />;
}

export default Spinner;
