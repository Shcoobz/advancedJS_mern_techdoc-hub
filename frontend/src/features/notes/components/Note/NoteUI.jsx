import { formatDateSimple } from '../../utils/noteUtils';
import { EditButton } from '../../../../components/common/Buttons';
import { UI } from '../../../../config/constants';
import { noteUIPropTypes } from '../../../../config/propTypes';

/**
 * @function NoteUI
 * @description Displays a note's details.
 */
function NoteUI({ status, createdAt, updatedAt, title, user, onEdit }) {
  const created = formatDateSimple(createdAt);
  const updated = formatDateSimple(updatedAt);

  const statusLabel =
    status === UI.DASH.NOTE.LABEL.completed ? (
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
      <td className='table__cell note__username'>{user}</td>
      <td className='table__cell'>
        <EditButton onClick={onEdit} />
      </td>
    </tr>
  );
}

/**
 * @constant propTypes
 * @description Defines the types for the props used in the NoteUI component.
 */
NoteUI.propTypes = noteUIPropTypes;

export default NoteUI;
