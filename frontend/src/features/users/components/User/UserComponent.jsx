import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../../api/usersApiSlice';
import { goToUserId } from '../../../../service/navigationService';
import { CLASS_NAME, CONFIG, REPLACEMENT } from '../../../../config/constants';
import UserUI from './UserUI';
import { userComponentPropTypes } from '../../../../config/propTypes';

/**
 * @function UserComponent
 * @description Displays user details and provides navigation to edit the user. Retrieves user data from the API and formats user roles and status.
 */
function UserComponent({ userId }) {
  const navigate = useNavigate();

  /**
   * @function useGetUsersQuery
   * @description Retrieves a specific user from the API and selects user data based on `userId`.
   */
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

/**
 * @function UserComponent.propTypes
 * @description Specifies the expected prop types for the `UserComponent` component.
 */
UserComponent.propTypes = userComponentPropTypes;

export default UserComponent;
