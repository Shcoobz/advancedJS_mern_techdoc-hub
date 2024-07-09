import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersApiSlice';

import NewNoteForm from './NewNoteForm';

function NewNote() {
  const users = useSelector(selectAllUsers);

  if (!users?.length) return <p>Currently Not Available</p>;

  const content = <NewNoteForm users={users} />;

  return content;
}

export default NewNote;
