import { CONFIG } from '../../../../config/constants';
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

  const sortedUsers =
    isSuccess &&
    [...users.ids].sort((a, b) => {
      const rolesA = users.entities[a].roles;
      const rolesB = users.entities[b].roles;

      return getRolePriority(rolesA) - getRolePriority(rolesB);
    });

  if (isLoading) {
    return <UsersListUI isLoading={true} />;
  }

  if (isError) {
    return <UsersListUI isError={true} errorMessage={error?.data?.message} />;
  }

  if (isSuccess) {
    // const { ids } = users;

    const tableContent =
      sortedUsers?.length &&
      sortedUsers.map((userId) => <User key={userId} userId={userId} />);

    return <UsersListUI tableContent={tableContent} />;
  }

  return null;
}

export default UsersList;
