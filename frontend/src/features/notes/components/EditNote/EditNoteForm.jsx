import { useState, useEffect } from 'react';
import { useUpdateNoteMutation, useDeleteNoteMutation } from '../../api/notesApiSlice';
import { useNavigate } from 'react-router-dom';
import { formatDate, generateUserOptions } from '../../utils/noteUtils';
import { getErrClass, getErrContent, getValidClass } from '../../../../service/formUtils';
import { CLASS_NAME, PATH, REPLACEMENT } from '../../../../config/constants';
import useAuth from '../../../../hooks/useAuth';
import EditNoteFormUI from './EditNoteFormUI';
import { editNoteFormPropTypes } from '../../../../config/propTypes';

/**
 * @function EditNoteForm
 * @description Component for rendering the form to edit a note, including state management and form submission.
 */
function EditNoteForm({ note, users }) {
  const { isManager, isAdmin } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);
  const [completed, setCompleted] = useState(note.completed);
  const [userId, setUserId] = useState(note.user);

  const [updateNote, { isLoading, isSuccess, isError, error }] = useUpdateNoteMutation();
  const [deleteNote, { isSuccess: isDelSuccess, isError: isDelError, error: delerror }] =
    useDeleteNoteMutation();

  const created = formatDate(note.createdAt);
  const updated = formatDate(note.updatedAt);
  const canSave = [title, text, userId].every(Boolean) && !isLoading;

  const options = generateUserOptions(users);

  const errClass = getErrClass(isError, isDelError);
  const errContent = getErrContent(error, delerror);
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
    if (isSuccess || isDelSuccess) {
      setTitle(REPLACEMENT.emptyString);
      setText(REPLACEMENT.emptyString);
      setUserId(REPLACEMENT.emptyString);
      navigate(PATH.DASH.NOTE.overview);
    }
  }, [isSuccess, isDelSuccess, navigate]);

  const editNoteFormProps = {
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
  };

  return <EditNoteFormUI editNoteFormProps={editNoteFormProps} />;
}

/**
 * @constant propTypes
 * @description Prop types for the EditNoteForm component.
 */
EditNoteForm.propTypes = editNoteFormPropTypes;

export default EditNoteForm;
