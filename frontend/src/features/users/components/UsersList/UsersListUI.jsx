import { CLASS_NAME, MSG, TITLE, UI } from '../../../../config/constants';
import { useSortableData } from '../../../../hooks/useSortableData';
import useTitle from '../../../../hooks/useTitle';
import Spinner from '../../../../components/common/Spinner';
import SortableTableHeader from '../../../../components/common/SortableTableHeader';
import CustomTableHeader from '../../../../components/common/CustomTableHeader';
import SearchInput from '../../../../components/common/SearchInput';
import { usersListUIPropTypes } from '../../../../config/propTypes';

/**
 * @function UsersListUI
 * @desc Displays the users list with sorting, search, and handling loading or error states.
 */
function UsersListUI({ tableContent, setSearchTerm, isLoading, isError, errorMessage }) {
  const {
    items: sortedItems,
    requestSort,
    resetSort,
    sortConfig,
  } = useSortableData(tableContent);

  useTitle(`${TITLE.PUBLIC.companyInitials} ${TITLE.placeholder} ${TITLE.USER.list}`);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p className={CLASS_NAME.errorMsg}>{errorMessage}</p>;
  }

  if (!sortedItems || sortedItems.length === 0) {
    return <p>{MSG.USER.noUserFound}</p>;
  }

  return (
    <>
      <SearchInput setSearchTerm={setSearchTerm} />
      <table className='table table--users'>
        <thead className='table__thead'>
          <tr>
            <SortableTableHeader
              columnKey={UI.DASH.USER.TABLE.COL_KEY.username}
              title={UI.DASH.USER.TABLE.TITLE.username}
              label={UI.DASH.USER.TABLE.TITLE.username}
              sortConfig={sortConfig}
              requestSort={requestSort}
              resetSort={resetSort}
            />
            <SortableTableHeader
              columnKey={UI.DASH.USER.TABLE.COL_KEY.roles}
              title={UI.DASH.USER.TABLE.TITLE.roles}
              label={UI.DASH.USER.TABLE.TITLE.roles}
              sortConfig={sortConfig}
              requestSort={requestSort}
              resetSort={resetSort}
            />
            <CustomTableHeader label={UI.DASH.USER.TABLE.TITLE.edit} />
          </tr>
        </thead>
        <tbody>{sortedItems}</tbody>
      </table>
    </>
  );
}

/**
 * @function UsersListUI.propTypes
 * @desc Validates the props for the UsersListUI component, ensuring correct data types and required fields.
 */
UsersListUI.propTypes = usersListUIPropTypes;

export default UsersListUI;
