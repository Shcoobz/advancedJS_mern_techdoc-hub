import { CLASS_NAME, UI } from '../../../../config/constants';
import { useSortableData } from '../../../../hooks/useSortableData';
import { getSortDirectionSymbol } from '../../utils/notesListUtils';
import Spinner from '../../../../components/common/Spinner';

function NotesListUI({ tableContent, isLoading, isError, errorMessage }) {
  const {
    items: sortedItems,
    requestSort,
    resetSort,
    sortConfig,
  } = useSortableData(tableContent);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p className={CLASS_NAME.errorMsg}>{errorMessage}</p>;
  }

  return (
    <table className='table table--notes'>
      <thead className='table__thead'>
        <tr>
          <th
            scope='col'
            className='table__th table__th--center table__th--status table__th--pointer'
            onClick={() => requestSort('status')}
            title='Sort by Status'>
            {UI.DASH.NOTE.TABLE.status}
            {getSortDirectionSymbol('status', sortConfig, resetSort)}
          </th>
          <th
            scope='col'
            className='table__th table__th--center table__th--created table__th--pointer'
            onClick={() => requestSort('createdAt')}
            title='Sort by Created Date'>
            {UI.DASH.NOTE.TABLE.created}
            {getSortDirectionSymbol('createdAt', sortConfig, resetSort)}
          </th>
          <th
            scope='col'
            className='table__th table__th--center table__th--updated table__th--pointer'
            onClick={() => requestSort('updatedAt')}
            title='Sort by Updated Date'>
            {UI.DASH.NOTE.TABLE.updated}
            {getSortDirectionSymbol('updatedAt', sortConfig, resetSort)}
          </th>
          <th
            scope='col'
            className='table__th table__th--center table__th--title table__th--pointer'
            onClick={() => requestSort('title')}
            title='Sort by Title'>
            {UI.DASH.NOTE.TABLE.title}
            {getSortDirectionSymbol('title', sortConfig, resetSort)}
          </th>
          <th
            scope='col'
            className='table__th table__th--center table__th--username table__th--pointer'
            onClick={() => requestSort('user')}
            title='Sort by Owner'>
            {UI.DASH.NOTE.TABLE.owner}
            {getSortDirectionSymbol('user', sortConfig, resetSort)}
          </th>
          <th scope='col' className='table__th table__th--center table__th--edit'>
            {UI.DASH.NOTE.TABLE.actions}
          </th>
        </tr>
      </thead>
      <tbody>{sortedItems}</tbody>
    </table>
  );
}

export default NotesListUI;
