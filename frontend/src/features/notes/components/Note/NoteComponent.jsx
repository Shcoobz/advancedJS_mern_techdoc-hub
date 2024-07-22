import { useNavigate } from 'react-router-dom';
import { useGetNotesQuery } from '../../api/notesApiSlice';
import { CONFIG, UI } from '../../../../config/constants';
import NoteUI from './NoteUI';
import { goToNoteId } from '../../../../service/navigationService';
import { noteComponentPropTypes } from '../../../../config/propTypes';

/**
 * @function NoteComponent
 * @description Retrieves and displays a single note based on `noteId`, using `useGetNotesQuery` to fetch data and passing details to `NoteUI`, with an `onEdit` function to navigate to the note's edit page.
 */
function NoteComponent({ noteId }) {
  const navigate = useNavigate();

  /**
   * @function useGetNotesQuery
   * @description Retrieves a single note from the API query result based on `noteId`, selecting the note entity from the normalized data.
   */
  const { note } = useGetNotesQuery(CONFIG.CACHE_KEY.notesList, {
    selectFromResult: ({ data }) => ({
      note: data?.entities[noteId],
    }),
  });

  const status = note.completed ? UI.DASH.NOTE.LABEL.completed : UI.DASH.NOTE.LABEL.open;
  const username = note.username;

  /**
   * @function onEdit
   * @description Navigates to the edit page of the note specified by `noteId` using the `navigate` function.
   */
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

/**
 * @constant propTypes
 * @description Prop types for the NoteComponent component.
 */
NoteComponent.propTypes = noteComponentPropTypes;

export default NoteComponent;
