import { useNavigate } from 'react-router-dom';
import { useGetNotesQuery } from '../../api/notesApiSlice';
import { CONFIG, REPLACEMENT, SORTING } from '../../../../config/constants';
import { getFilteredIds, renderTableContent } from '../../../../service/sortingService';
import useAuth from '../../../../hooks/useAuth';
import NotesListUI from './NotesListUI';
import { useState } from 'react';
import { filterBySearchTerm } from '../../../../service/searchService';

/**
 * @function NotesList
 * @description Fetches and displays a list of notes, applying filtering based on search terms, user permissions, and status. Handles loading, error states, and renders table content using `NotesListUI`.
 */
function NotesList() {
  const { username, isManager, isAdmin } = useAuth();
  const navigate = useNavigate;
  const [searchTerm, setSearchTerm] = useState('');

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
    const searchFilteredIds = filterBySearchTerm(filteredIds, entities, searchTerm);
    const tableContent = renderTableContent(
      searchFilteredIds,
      entities,
      navigate,
      SORTING.TYPE.note
    );

    return <NotesListUI tableContent={tableContent} setSearchTerm={setSearchTerm} />;
  }

  return null;
}

export default NotesList;
