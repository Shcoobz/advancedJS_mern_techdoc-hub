import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectNoteById } from './notesApiSlice';

function Note({ noteId }) {
  const note = useSelector((state) => selectNoteById(state, noteId));

  const navigate = useNavigate();

  function handleEdit() {
    return navigate(`/dash/notes/${noteId}`);
  }

  if (note) {
    const created = new Date(note.createdAt)
      .toLocaleString('de-AT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
      .replace(/\.\s/, ' ');

    const updated = new Date(note.updatedAt)
      .toLocaleString('de-AT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
      .replace(/\.\s/, ' ');

    return (
      <tr className='table__row'>
        <td className='table__cell note__status'>
          {note.completed ? (
            <span className='note__status--completed'>Completed</span>
          ) : (
            <span className='note__status--open'>Open</span>
          )}
        </td>
        <td className='table__cell note__created'>{created}</td>
        <td className='table__cell note__updated'>{updated}</td>
        <td className='table__cell note__title'>{note.title}</td>
        <td className='table__cell note__username'>{note.username}</td>

        <td className='table__cell'>
          <button className='icon-button table__button' onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </td>
      </tr>
    );
  } else return null;
}

export default Note;
