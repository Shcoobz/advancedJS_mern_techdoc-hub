import { useNavigate } from 'react-router-dom';
import { useGetNotesQuery } from '../../api/notesApiSlice';
import { CONFIG, REPLACEMENT } from '../../../../config/constants';
import { getFilteredIds, renderTableContent } from '../../utils/notesListUtils';
import useAuth from '../../../../hooks/useAuth';
import NotesListUI from './NotesListUI';

function NotesList() {
  const { username, isManager, isAdmin } = useAuth();
  const navigate = useNavigate;

  const {
    data: notes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNotesQuery(CONFIG.CACHE_KEY.notesList, {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <NotesListUI isLoading={isLoading} />;
  }

  if (isError) {
    const errorMessage = error?.data?.message || REPLACEMENT.emptyString;

    return <NotesListUI isError={isError} errorMessage={errorMessage} />;
  }

  if (isSuccess) {
    const { ids, entities } = notes;
    const filteredIds = getFilteredIds(ids, entities, username, isManager, isAdmin);
    const tableContent = renderTableContent(filteredIds, entities, navigate);

    return <NotesListUI tableContent={tableContent} />;
  }

  return null;
}

export default NotesList;
