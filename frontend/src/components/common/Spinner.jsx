import PulseLoader from 'react-spinners/PulseLoader';

/**
 * @function Spinner
 * @description Component for displaying a loading spinner using PulseLoader.
 */
function Spinner() {
  return (
    <div className='spinner-container'>
      <PulseLoader color='currentColor' />
    </div>
  );
}

export default Spinner;
