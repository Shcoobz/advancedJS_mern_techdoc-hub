import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersApiSlice';

import NewNoteForm from './NewNoteForm';

function NewNote() {
  const users = useSelector(selectAllUsers);

  const content = users ? (
    <NewNoteForm users={users} />
  ) : (
    <p>Loading...</p>
  ); /* TODO: replace with spinner */

  return content;
}

export default NewNote;
