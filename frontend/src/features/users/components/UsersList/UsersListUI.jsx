import { CLASS_NAME, TITLE, UI } from '../../../../config/constants';
import { getSortDirectionSymbol } from '../../utils/usersListUtils';
import { useSortableUserData } from '../../../../hooks/useSortableUserData';
import useTitle from '../../../../hooks/useTitle';
import Spinner from '../../../../components/common/Spinner';
import SortableTableHeader from '../../../../components/common/SortableTableHeader';
import CustomTableHeader from '../../../../components/common/CustomTableHeader';

function UsersListUI({ tableContent, isLoading, isError, errorMessage }) {
  // console.log('UsersListUI - Received props:', {
  //   tableContent,
  //   isLoading,
  //   isError,
  //   errorMessage,
  // });

  const {
    items: sortedItems,
    requestSort,
    resetSort,
    sortConfig,
  } = useSortableUserData(tableContent);

  // console.log('UsersListUI - Sorted items:', sortedItems);

  useTitle(`${TITLE.PUBLIC.companyInitials} ${TITLE.placeholder} ${TITLE.USER.list}`);

  if (isLoading) {
    // console.log('UsersListUI - Rendering loading state');
    return <Spinner />;
  }

  if (isError) {
    // console.log('UsersListUI - Rendering error state:', errorMessage);
    return <p className={CLASS_NAME.errorMsg}>{errorMessage}</p>;
  }

  if (!sortedItems || sortedItems.length === 0) {
    // console.log('UsersListUI - No users found');
    return <p>No users found.</p>;
  }

  // console.log('UsersListUI - Rendering table with', sortedItems.length, 'users');

  return (
    <table className='table table--users'>
      <thead className='table__thead'>
        <tr>
          <SortableTableHeader
            columnKey='username'
            title='Username'
            label={UI.DASH.USER.TABLE.TITLE.username}
            sortConfig={sortConfig}
            requestSort={requestSort}
            resetSort={resetSort}
          />
          <SortableTableHeader
            columnKey='roles'
            title='Roles'
            label={UI.DASH.USER.TABLE.TITLE.roles}
            sortConfig={sortConfig}
            requestSort={requestSort}
            resetSort={resetSort}
          />
          <CustomTableHeader
            label={UI.DASH.USER.TABLE.TITLE.edit}
            additionalClass='user__edit'
          />
        </tr>
      </thead>
      <tbody>{sortedItems}</tbody>
    </table>
  );
}

export default UsersListUI;
