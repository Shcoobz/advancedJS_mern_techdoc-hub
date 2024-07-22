import { useParams } from 'react-router-dom';
import { useGetUsersQuery } from '../../api/usersApiSlice';
import { CONFIG } from '../../../../config/constants';
import Spinner from '../../../../components/common/Spinner';
import EditUserForm from './EditUserForm';

/**
 * @function EditUser
 * @description Fetches a user by ID and renders the `EditUserForm` if the user is found, otherwise shows a loading spinner.
 */
function EditUser() {
  const { id } = useParams();

  const { user } = useGetUsersQuery(CONFIG.CACHE_KEY.usersList, {
    selectFromResult: ({ data }) => ({
      user: data?.entities[id],
    }),
  });

  if (!user) return <Spinner />;

  const content = <EditUserForm user={user} />;

  return content;
}

export default EditUser;
