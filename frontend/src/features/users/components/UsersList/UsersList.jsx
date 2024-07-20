import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../../api/usersApiSlice';
import { getFilteredIds, renderTableContent } from '../../../../service/sortingService';
import { CONFIG, REPLACEMENT, SORTING } from '../../../../config/constants';
import useAuth from '../../../../hooks/useAuth';
import UsersListUI from './UsersListUI';

function UsersList() {
  const { username, isManager, isAdmin } = useAuth();
  const navigate = useNavigate();

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
    return <UsersListUI isLoading={isLoading} />;
  }

  if (isError) {
    const errorMessage = error?.data?.message || REPLACEMENT.emptyString;

    return <UsersListUI isError={isError} errorMessage={errorMessage} />;
  }

  if (isSuccess) {
    const { ids, entities } = users;
    const filteredIds = getFilteredIds(ids, entities, username, isManager, isAdmin);
    const tableContent = renderTableContent(
      filteredIds,
      entities,
      navigate,
      SORTING.TYPE.user
    );

    return <UsersListUI tableContent={tableContent} />;
  }

  return null;
}

export default UsersList;
