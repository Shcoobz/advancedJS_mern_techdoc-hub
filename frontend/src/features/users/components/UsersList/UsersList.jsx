import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../../api/usersApiSlice';
import { getFilteredIds, renderTableContent } from '../../utils/usersListUtils';
import { CONFIG, REPLACEMENT } from '../../../../config/constants';
import useAuth from '../../../../hooks/useAuth';
import UsersListUI from './UsersListUI';
import { useMemo } from 'react';

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
    return <UsersListUI isLoading={true} />;
  }

  if (isError) {
    const errorMessage = error?.data?.message || REPLACEMENT.emptyString;
    return <UsersListUI isError={true} errorMessage={errorMessage} />;
  }

  if (isSuccess) {
    const { ids, entities } = users;
    const filteredIds = getFilteredIds(ids, entities, username, isManager, isAdmin);
    const tableContent = renderTableContent(filteredIds, entities, navigate);
    return <UsersListUI tableContent={tableContent} />;
  }

  return null;
}

export default UsersList;
