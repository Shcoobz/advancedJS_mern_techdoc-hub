import { useParams } from 'react-router-dom';
import { useGetUsersQuery } from '../../api/usersApiSlice';
import PulseLoader from 'react-spinners/PulseLoader';

import EditUserForm from './EditUserForm';

function EditUser() {
  const { id } = useParams();

  const { user } = useGetUsersQuery('usersList', {
    selectFromResult: ({ data }) => ({
      user: data?.entities[id],
    }),
  });

  if (!user) return <PulseLoader color={'#FFF'} />;

  const content = <EditUserForm user={user} />;

  return content;
}

export default EditUser;
