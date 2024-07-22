import { useState } from 'react';
import { searchInputPropTypes } from '../../config/propTypes';
import { REPLACEMENT, SORTING } from '../../config/constants';

/**
 * @function SearchInput
 * @description Input component for searching with a clear button.
 */
function SearchInput({ setSearchTerm }) {
  const [localSearchTerm, setLocalSearchTerm] = useState(REPLACEMENT.emptyString);

  /**
   * @function handleInputChange
   * @description Handles input change event to update search term.
   */
  function handleInputChange(e) {
    const value = e.target.value;
    setLocalSearchTerm(value);
    setSearchTerm(value);
  }

  /**
   * @function clearSearch
   * @description Clears the search input and resets the search term.
   */
  function clearSearch() {
    setLocalSearchTerm(REPLACEMENT.emptyString);
    setSearchTerm(REPLACEMENT.emptyString);
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
          {SORTING.SYMBOL.reset}
        </button>
      )}
    </div>
  );
}

/**
 * @constant SearchInput.propTypes
 * @description Prop types for SearchInput component.
 */
SearchInput.propTypes = searchInputPropTypes;

export default SearchInput;
