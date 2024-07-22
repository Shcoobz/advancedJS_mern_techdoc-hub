import { REPLACEMENT } from '../../config/constants';
import { searchableTableHeaderPropTypes } from '../../config/propTypes';
import { getSortDirectionSymbol } from '../../service/sortingService';

/**
 * @function SortableTableHeader
 * @description Table header component that supports sorting functionality.
 */
function SortableTableHeader({
  columnKey,
  title,
  label,
  sortConfig,
  requestSort,
  resetSort,
  additionalClass = REPLACEMENT.emptyString,
}) {
  return (
    <th
      scope='col'
      className={`table__th table__th--center table__th--pointer ${additionalClass}`}
      onClick={() => requestSort(columnKey)}
      title={`Sort by ${title}`}>
      {label}
      {getSortDirectionSymbol(columnKey, sortConfig, resetSort)}
    </th>
  );
}

/**
 * @constant SortableTableHeader.propTypes
 * @description Prop types for SortableTableHeader component.
 */
SortableTableHeader.propTypes = searchableTableHeaderPropTypes;

export default SortableTableHeader;
