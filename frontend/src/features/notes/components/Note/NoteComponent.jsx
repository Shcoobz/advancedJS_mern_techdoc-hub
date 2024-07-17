import { useNavigate } from 'react-router-dom';
import { useGetNotesQuery } from '../../api/notesApiSlice';
import { CONFIG, UI } from '../../../../config/constants';
import NoteUI from './NoteUI';
import { goToNoteId } from '../../../../service/navigationService';

function NoteComponent({ noteId }) {
  const navigate = useNavigate();

  const { note } = useGetNotesQuery(CONFIG.CACHE_KEY.notesList, {
    selectFromResult: ({ data }) => ({
      note: data?.entities[noteId],
    }),
  });

  const status = note.completed ? UI.DASH.NOTE.LABEL.completed : UI.DASH.NOTE.LABEL.open;
  const username = note.username;

  function onEdit() {
    goToNoteId(navigate, noteId)();
  }

  if (!note) return null;

  return (
    <NoteUI
      status={status}
      createdAt={note.createdAt}
      updatedAt={note.updatedAt}
      title={note.title}
      user={username}
      onEdit={onEdit}
    />
  );
}

export default NoteComponent;
