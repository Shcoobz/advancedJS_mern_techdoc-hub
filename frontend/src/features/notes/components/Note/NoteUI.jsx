import { formatDateSimple } from '../../utils/noteUtils';
import { EditButton } from '../../../../components/common/Buttons';
import { UI } from '../../../../config/constants';

function NoteUI({ note, onEdit }) {
  const { completed, createdAt, updatedAt, title, username } = note;

  const created = formatDateSimple(createdAt);
  const updated = formatDateSimple(updatedAt);

  const statusLabel = completed ? (
    <span className='note__status--completed'>{UI.DASH.NOTE.LABEL.completed}</span>
  ) : (
    <span className='note__status--open'>{UI.DASH.NOTE.LABEL.open}</span>
  );

  return (
    <tr className='table__row'>
      <td className='table__cell note__status'>{statusLabel}</td>
      <td className='table__cell note__created'>{created}</td>
      <td className='table__cell note__updated'>{updated}</td>
      <td className='table__cell note__title'>{title}</td>
      <td className='table__cell note__username'>{username}</td>
      <td className='table__cell'>
        <EditButton onClick={onEdit} />
      </td>
    </tr>
  );
}

export default NoteUI;
