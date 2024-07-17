import { useNavigate } from 'react-router-dom';
import { useGetNotesQuery } from '../../api/notesApiSlice';

import { CONFIG } from '../../../../config/constants';
import NoteUI from './NoteUI';

import { goToNoteId } from '../../../../service/navigationService';

function NoteComponent({ noteId }) {
  const navigate = useNavigate();

  const { note } = useGetNotesQuery(CONFIG.CACHE_KEY.notesList, {
    selectFromResult: ({ data }) => ({
      note: data?.entities[noteId],
    }),
  });

  function onEdit() {
    goToNoteId(navigate, noteId)();
  }

  if (!note) return null;

  return <NoteUI note={note} onEdit={onEdit} />;
}

export default NoteComponent;
