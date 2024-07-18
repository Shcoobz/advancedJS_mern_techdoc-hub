import { CLASS_NAME, TITLE, UI } from '../../../../config/constants';
import Spinner from '../../../../components/common/Spinner';
import useTitle from '../../../../hooks/useTitle';

function UsersListUI({ isLoading, isError, errorMessage, tableContent }) {
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
          <th scope='col' className='table__th table__th--center user__username'>
            {UI.DASH.USER.TABLE.username}
          </th>
          <th scope='col' className='table__th table__th--center user__roles'>
            {UI.DASH.USER.TABLE.roles}
          </th>
          <th scope='col' className='table__th table__th--center user__edit'>
            {UI.DASH.USER.TABLE.edit}
          </th>
        </tr>
      </thead>
      <tbody>{tableContent}</tbody>
    </table>
  );
}

export default UsersListUI;
