import useTitle from '../../../../hooks/useTitle';
import { REPLACEMENT, TITLE, UI } from '../../../../config/constants';
import { DeleteButton, SaveButton } from '../../../../components/common/Buttons';
import {
  onTitleChanged,
  onCompletedChanged,
  onTextChanged,
  onUserIdChanged,
  onSaveNoteClicked,
  onDeleteNoteClicked,
} from '../../utils/noteEventHandlers';

function EditNoteFormUI({ editNoteFormProps }) {
  useTitle(`${TITLE.PUBLIC.companyInitials} ${TITLE.placeholder} ${TITLE.NOTE.edit}`);

  const {
    title,
    text,
    completed,
    userId,
    setTitle,
    setText,
    setCompleted,
    setUserId,
    updateNote,
    deleteNote,
    canSave,
    errClass,
    validTitleClass,
    validTextClass,
    errContent,
    options,
    created,
    updated,
    note,
    isManager,
    isAdmin,
  } = editNoteFormProps;

  const noteTitle = UI.DASH.NOTE.LABEL.ticketTitle.replace(
    REPLACEMENT.noteTicket,
    note.ticket
  );

  async function saveNoteHandler(e) {
    await onSaveNoteClicked(updateNote, canSave, {
      id: note.id,
      userId,
      title,
      text,
      completed,
    });
  }

  async function deleteNoteHandler(e) {
    return onDeleteNoteClicked(deleteNote, note.id);
  }

  const deleteButton = (isManager || isAdmin) && (
    <DeleteButton onClick={deleteNoteHandler} />
  );

  const content = (
    <>
      <p className={errClass}>{errContent}</p>

      <form className='form' onSubmit={(e) => e.preventDefault()}>
        <div className='form__title-row'>
          <h2>{noteTitle}</h2>
          <div className='form__action-buttons'>
            <SaveButton onClick={saveNoteHandler} disabled={!canSave} />
            {deleteButton}
          </div>
        </div>
        <label className='form__label' htmlFor='note-title'>
          {UI.DASH.NOTE.LABEL.title}
        </label>
        <input
          className={`form__input ${validTitleClass}`}
          id='note-title'
          name='title'
          type='text'
          autoComplete='off'
          value={title}
          onChange={(e) => {
            onTitleChanged(e, setTitle);
          }}
        />

        <label className='form__label' htmlFor='note-text'>
          {UI.DASH.NOTE.LABEL.text}
        </label>
        <textarea
          className={`form__input form__input--text ${validTextClass}`}
          id='note-text'
          name='text'
          value={text}
          onChange={(e) => {
            onTextChanged(e, setText);
          }}
        />
        <div className='form__row'>
          <div className='form__divider'>
            <label
              className='form__label form__checkbox-container'
              htmlFor='note-completed'>
              {UI.DASH.NOTE.LABEL.workComplete}
              <input
                className='form__checkbox'
                id='note-completed'
                name='completed'
                type='checkbox'
                checked={completed}
                onChange={(e) => {
                  onCompletedChanged(e, setCompleted);
                }}
              />
            </label>

            <label
              className='form__label form__checkbox-container'
              htmlFor='note-username'>
              {UI.DASH.NOTE.LABEL.assignedTo}
            </label>
            <select
              id='note-username'
              name='username'
              className='form__select'
              value={userId}
              onChange={(e) => {
                onUserIdChanged(e, setUserId);
              }}>
              {options}
            </select>
          </div>
          <div className='form__divider'>
            <p className='form__created'>
              {UI.DASH.NOTE.LABEL.created}
              <br />
              {created}
            </p>
            <p className='form__updated'>
              {UI.DASH.NOTE.LABEL.updated}
              <br />
              {updated}
            </p>
          </div>
        </div>
      </form>
    </>
  );

  return content;
}

export default EditNoteFormUI;
