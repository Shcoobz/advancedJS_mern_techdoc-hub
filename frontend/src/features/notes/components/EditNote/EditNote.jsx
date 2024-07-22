import { useParams } from 'react-router-dom';
import { useGetNotesQuery } from '../../api/notesApiSlice';
import { useGetUsersQuery } from '../../../users/api/usersApiSlice';
import { CLASS_NAME, CONFIG, UI } from '../../../../config/constants';
import useAuth from '../../../../hooks/useAuth';
import Spinner from '../../../../components/common/Spinner';
import EditNoteForm from './EditNoteForm';

/**
 * @function EditNote
 * @description Component for editing a note, including fetching note and user data and authorization check.
 */
function EditNote() {
  const { id } = useParams();
  const { username, isManager, isAdmin } = useAuth();

  /**
   * @function useGetNotesQuery
   * @description Hook to fetch a specific note by its ID from the cache.
   */
  const { note } = useGetNotesQuery(CONFIG.CACHE_KEY.notesList, {
    selectFromResult: ({ data }) => ({
      note: data?.entities[id],
    }),
  });

  /**
   * @function useGetUsersQuery
   * @description Hook to fetch all users from the cache.
   */
  const { users } = useGetUsersQuery(CONFIG.CACHE_KEY.usersList, {
    selectFromResult: ({ data }) => ({
      users: data?.ids.map((id) => data?.entities[id]),
    }),
  });

  if (!note || !users?.length) return <Spinner />;

  if (!isManager && !isAdmin) {
    if (note.username !== username) {
      return <p className={CLASS_NAME.errorMsg}>{UI.PUBLIC.noAccess}</p>;
    }
  }

  const content = <EditNoteForm note={note} users={users} />;

  return content;
}

export default EditNote;
