import { getSortDirectionSymbol } from '../../service/sortingService';

function SortableTableHeader({
  columnKey,
  title,
  label,
  sortConfig,
  requestSort,
  resetSort,
  additionalClass = '',
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

export default SortableTableHeader;
