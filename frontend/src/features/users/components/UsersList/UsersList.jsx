import { CONFIG } from '../../../../config/constants';
import { useSortableUserData } from '../../../../hooks/useSortableUserData';
import { useGetUsersQuery } from '../../api/usersApiSlice';
import { getRolePriority } from '../../utils/usersListUtils';
import User from '../User/User';
import UsersListUI from './UsersListUI';

function UsersList() {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery(CONFIG.CACHE_KEY.usersList, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let tableContent = [];

  if (isSuccess && users?.ids?.length) {
    const sortedUsers = [...users.ids].sort((a, b) => {
      const rolesA = users.entities[a]?.roles || [];
      const rolesB = users.entities[b]?.roles || [];
      return getRolePriority(rolesA) - getRolePriority(rolesB);
    });

    tableContent = sortedUsers.map((userId) => ({
      id: userId,
      username: users.entities[userId]?.username || '',
      roles: (users.entities[userId]?.roles || []).toString().replaceAll(',', ', '),
    }));
  }

  const {
    items: sortedItems,
    requestSort,
    resetSort,
    sortConfig,
  } = useSortableUserData(tableContent);

  if (isLoading) {
    return <UsersListUI isLoading={true} />;
  }

  if (isError) {
    return <UsersListUI isError={true} errorMessage={error?.data?.message} />;
  }

  return (
    <UsersListUI
      tableContent={sortedItems}
      requestSort={requestSort}
      resetSort={resetSort}
      sortConfig={sortConfig}
    />
  );
}

export default UsersList;
