import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddNewNoteMutation } from '../../api/notesApiSlice';
import { generateUserOptions } from '../../utils/noteUtils';
import { getErrClass, getValidClass } from '../../../../service/formUtils';
import { CLASS_NAME, INDEX, PATH, REPLACEMENT } from '../../../../config/constants';
import { onSaveNoteClicked } from '../../utils/noteEventHandlers';
import NewNoteFormUI from './NewNoteFormUI';

function NewNoteForm({ users }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState(REPLACEMENT.emptyString);
  const [text, setText] = useState(REPLACEMENT.emptyString);
  const [userId, setUserId] = useState(users[INDEX.first].id);

  const [addNewNote, { isLoading, isSuccess, isError, error }] = useAddNewNoteMutation();

  const noteDetails = { userId, title, text };
  const canSave = [title, text, userId].every(Boolean) && !isLoading;
  const options = generateUserOptions(users);

  const errClass = getErrClass(isError);
  const validTitleClass = getValidClass(
    title,
    CLASS_NAME.formInputIncomplete,
    REPLACEMENT.emptyString
  );
  const validTextClass = getValidClass(
    text,
    CLASS_NAME.formInputIncomplete,
    REPLACEMENT.emptyString
  );

  useEffect(() => {
    if (isSuccess) {
      setTitle(REPLACEMENT.emptyString);
      setText(REPLACEMENT.emptyString);
      setUserId(REPLACEMENT.emptyString);
      navigate(PATH.DASH.NOTE.overview);
    }
  }, [isSuccess, navigate]);

  function saveNoteHandler(e) {
    e.preventDefault();
    onSaveNoteClicked(addNewNote, canSave, noteDetails);
  }

  const newNoteFormProps = {
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
  };

  return <NewNoteFormUI newNoteFormProps={newNoteFormProps} />;
}

export default NewNoteForm;
