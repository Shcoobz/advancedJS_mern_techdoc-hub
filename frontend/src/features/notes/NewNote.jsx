import { useGetUsersQuery } from '../users/usersApiSlice';
import PulseLoader from 'react-spinners/PulseLoader';
import useAuth from '../../hooks/useAuth';

import NewNoteForm from './NewNoteForm';

function NewNote() {
  const { status } = useAuth();

  const { users } = useGetUsersQuery('usersList', {
    selectFromResult: ({ data }) => ({
      users: data?.ids.map((id) => data?.entities[id]),
    }),
  });

  if (!users?.length) return <PulseLoader color={'#FFF'} />;

  if (!status) {
    return <p className='errmsg'>No access</p>;
  }

  const content = <NewNoteForm users={users} />;

  return content;
}

export default NewNote;
