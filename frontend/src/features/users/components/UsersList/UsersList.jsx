import { CONFIG } from '../../../../config/constants';
import { useGetUsersQuery } from '../../api/usersApiSlice';
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

  if (isLoading) {
    return <UsersListUI isLoading={true} />;
  }

  if (isError) {
    return <UsersListUI isError={true} errorMessage={error?.data?.message} />;
  }

  if (isSuccess) {
    const { ids } = users;

    const tableContent =
      ids?.length && ids.map((userId) => <User key={userId} userId={userId} />);

    return <UsersListUI tableContent={tableContent} />;
  }

  return null;
}

export default UsersList;
