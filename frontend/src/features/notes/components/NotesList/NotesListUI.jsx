import { CLASS_NAME, INDEX, MSG, TITLE, UI } from '../../../../config/constants';
import { useSortableData } from '../../../../hooks/useSortableData';
import Spinner from '../../../../components/common/Spinner';
import useTitle from '../../../../hooks/useTitle';
import SortableTableHeader from '../../../../components/common/SortableTableHeader';
import CustomTableHeader from '../../../../components/common/CustomTableHeader';
import SearchInput from '../../../../components/common/SearchInput';

function NotesListUI({ tableContent, setSearchTerm, isLoading, isError, errorMessage }) {
  const {
    items: sortedItems,
    requestSort,
    resetSort,
    sortConfig,
  } = useSortableData(tableContent);

  useTitle(`${TITLE.PUBLIC.companyInitials} ${TITLE.placeholder} ${TITLE.NOTE.list}`);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p className={CLASS_NAME.errorMsg}>{errorMessage}</p>;
  }

  if (!sortedItems || sortedItems.length === INDEX.emptyArrayLength) {
    return <p>{MSG.NOTE.ERROR.noNotesFound}</p>;
  }

  return (
    <>
      <SearchInput setSearchTerm={setSearchTerm} />

      <table className='table table--notes'>
        <thead className='table__thead'>
          <tr>
            <SortableTableHeader
              columnKey={UI.DASH.NOTE.TABLE.COL_KEY.status}
              title={UI.DASH.NOTE.TABLE.TITLE.status}
              label={UI.DASH.NOTE.TABLE.TITLE.status}
              sortConfig={sortConfig}
              requestSort={requestSort}
              resetSort={resetSort}
            />
            <SortableTableHeader
              columnKey={UI.DASH.NOTE.TABLE.COL_KEY.createdAt}
              title={UI.DASH.NOTE.TABLE.TITLE.created}
              label={UI.DASH.NOTE.TABLE.TITLE.created}
              sortConfig={sortConfig}
              requestSort={requestSort}
              resetSort={resetSort}
            />
            <SortableTableHeader
              columnKey={UI.DASH.NOTE.TABLE.COL_KEY.updatedAt}
              title={UI.DASH.NOTE.TABLE.TITLE.updated}
              label={UI.DASH.NOTE.TABLE.TITLE.updated}
              sortConfig={sortConfig}
              requestSort={requestSort}
              resetSort={resetSort}
            />
            <SortableTableHeader
              columnKey={UI.DASH.NOTE.TABLE.COL_KEY.title}
              title={UI.DASH.NOTE.TABLE.TITLE.title}
              label={UI.DASH.NOTE.TABLE.TITLE.title}
              sortConfig={sortConfig}
              requestSort={requestSort}
              resetSort={resetSort}
            />
            <SortableTableHeader
              columnKey={UI.DASH.NOTE.TABLE.COL_KEY.owner}
              title={UI.DASH.NOTE.TABLE.TITLE.owner}
              label={UI.DASH.NOTE.TABLE.TITLE.owner}
              sortConfig={sortConfig}
              requestSort={requestSort}
              resetSort={resetSort}
            />
            <CustomTableHeader label={UI.DASH.NOTE.TABLE.TITLE.edit} />
          </tr>
        </thead>
        <tbody>{sortedItems}</tbody>
      </table>
    </>
  );
}

export default NotesListUI;
