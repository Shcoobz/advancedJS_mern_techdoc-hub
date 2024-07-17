import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../../api/usersApiSlice';
import { goToUserId } from '../../../../service/navigationService';
import { CLASS_NAME, CONFIG, REPLACEMENT } from '../../../../config/constants';
import UserUI from './UserUI';

function UserComponent({ userId }) {
  const navigate = useNavigate();

  const { user } = useGetUsersQuery(CONFIG.CACHE_KEY.usersList, {
    selectFromResult: ({ data }) => ({
      user: data?.entities[userId],
    }),
  });

  const userRolesString = user.roles
    .toString()
    .replaceAll(REPLACEMENT.comma, REPLACEMENT.commaSpace);
  const cellStatus = user.active ? REPLACEMENT.emptyString : CLASS_NAME.cellInactive;

  function onEdit() {
    goToUserId(navigate, userId)();
  }

  if (!user) return null;

  return (
    <UserUI
      username={user.username}
      userRolesString={userRolesString}
      cellStatus={cellStatus}
      onEdit={onEdit}
    />
  );
}

export default UserComponent;
