import { useGetUsersQuery } from '../../../users/api/usersApiSlice';
import useAuth from '../../../../hooks/useAuth';
import Spinner from '../../../../components/common/Spinner';
import NewNoteForm from './NewNoteForm';
import { CLASS_NAME, CONFIG, UI } from '../../../../config/constants';

function NewNote() {
  const { status } = useAuth();

  const { users } = useGetUsersQuery(CONFIG.CACHE_KEY.usersList, {
    selectFromResult: ({ data }) => ({
      users: data?.ids.map((id) => data?.entities[id]),
    }),
  });

  if (!users?.length) return <Spinner />;

  if (!status) {
    return <p className={CLASS_NAME.errorMsg}>{UI.PUBLIC.noAccess}</p>;
  }

  const content = <NewNoteForm users={users} />;

  return content;
}

export default NewNote;
