import { SaveButton } from '../../../../components/common/Buttons';
import { UI } from '../../../../config/constants';
import {
  onTextChanged,
  onTitleChanged,
  onUserIdChanged,
} from '../../utils/noteEventHandlers';

function NewNoteFormUI({ newNoteFormProps }) {
  const {
    title,
    text,
    userId,
    setTitle,
    setText,
    setUserId,
    saveNoteHandler,
    canSave,
    errClass,
    validTitleClass,
    validTextClass,
    error,
    options,
  } = newNoteFormProps;

  return (
    <>
      <p className={errClass}>{error?.data?.message}</p>

      <form className='form' onSubmit={saveNoteHandler}>
        <div className='form__title-row'>
          <h2>{UI.DASH.NOTE.LABEL.newTitle}</h2>
          <div className='form__action-buttons'>
            <SaveButton onClick={saveNoteHandler} disabled={!canSave} />
          </div>
        </div>
        <label className='form__label' htmlFor='title'>
          {UI.DASH.NOTE.LABEL.title}
        </label>
        <input
          className={`form__input ${validTitleClass}`}
          id='title'
          name='title'
          type='text'
          autoComplete='off'
          value={title}
          onChange={(e) => {
            onTitleChanged(e, setTitle);
          }}
        />

        <label className='form__label' htmlFor='text'>
          {UI.DASH.NOTE.LABEL.text}
        </label>
        <textarea
          className={`form__input form__input--text ${validTextClass}`}
          id='text'
          name='text'
          value={text}
          onChange={(e) => {
            onTextChanged(e, setText);
          }}
        />

        <label className='form__label form__checkbox-container' htmlFor='username'>
          {UI.DASH.NOTE.LABEL.assignedTo}
        </label>
        <select
          id='username'
          name='username'
          className='form__select'
          value={userId}
          onChange={(e) => {
            onUserIdChanged(e, setUserId);
          }}>
          {options}
        </select>
      </form>
    </>
  );
}

export default NewNoteFormUI;
