import { useState } from 'react';
import { searchInputPropTypes } from '../../config/propTypes';

function SearchInput({ setSearchTerm }) {
  const [localSearchTerm, setLocalSearchTerm] = useState('');

  function handleInputChange(e) {
    const value = e.target.value;
    setLocalSearchTerm(value);
    setSearchTerm(value);
  }

  function clearSearch() {
    setLocalSearchTerm('');
    setSearchTerm('');
  }

  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder='Search...'
        value={localSearchTerm}
        onChange={handleInputChange}
        className='search-input__input'
      />
      {localSearchTerm && (
        <button onClick={clearSearch} className='search-input__clear-button'>
          ✖
        </button>
      )}
    </div>
  );
}

SearchInput.propTypes = searchInputPropTypes;

export default SearchInput;
