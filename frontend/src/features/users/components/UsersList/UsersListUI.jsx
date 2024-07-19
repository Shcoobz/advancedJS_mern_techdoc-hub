import { CLASS_NAME, TITLE, UI } from '../../../../config/constants';
import Spinner from '../../../../components/common/Spinner';
import useTitle from '../../../../hooks/useTitle';
import { getSortDirectionSymbol } from '../../utils/usersListUtils';
import User from '../User/User';

function UsersListUI({
  isLoading,
  isError,
  errorMessage,
  tableContent,
  requestSort,
  resetSort,
  sortConfig,
}) {
  useTitle(`${TITLE.PUBLIC.companyInitials} ${TITLE.placeholder} ${TITLE.USER.list}`);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p className={CLASS_NAME.errorMsg}>{errorMessage}</p>;
  }

  return (
    <table className='table table--users'>
      <thead className='table__thead'>
        <tr>
          <th
            scope='col'
            className='table__th table__th--center user__username table__th--pointer'
            onClick={() => requestSort('username')}
            title='Sort by Username'>
            {UI.DASH.USER.TABLE.username}
            {getSortDirectionSymbol('username', sortConfig, resetSort)}
          </th>
          <th
            scope='col'
            className='table__th table__th--center user__roles table__th--pointer'
            onClick={() => requestSort('roles')}
            title='Sort by Roles'>
            {UI.DASH.USER.TABLE.roles}
            {getSortDirectionSymbol('roles', sortConfig, resetSort)}
          </th>
          <th scope='col' className='table__th table__th--center user__edit'>
            {UI.DASH.USER.TABLE.edit}
          </th>
        </tr>
      </thead>
      <tbody>
        {tableContent.map((user) => (
          <User key={user.id} userId={user.id} />
        ))}
      </tbody>
    </table>
  );
}

export default UsersListUI;
