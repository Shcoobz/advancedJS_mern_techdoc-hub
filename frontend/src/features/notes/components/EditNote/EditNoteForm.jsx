import { useState, useEffect } from 'react';
import { useUpdateNoteMutation, useDeleteNoteMutation } from '../../api/notesApiSlice';
import { useNavigate } from 'react-router-dom';
import { DeleteButton } from '../../../../components/common/Buttons';
import { onDeleteNoteClicked, onSaveNoteClicked } from '../../utils/noteEventHandlers';
import { formatDate, generateUserOptions } from '../../utils/editNoteUtils';
import { CLASS_NAME, PATH, REPLACEMENT } from '../../../../config/constants';
import useAuth from '../../../../hooks/useAuth';
import EditNoteFormUI from './EditNoteFormUI';
import { getErrClass, getErrContent, getValidClass } from '../../utils/formUtils';

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

  const noteDetails = { id: note.id, userId, title, text, completed };
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

  const saveNoteHandler = (e) => onSaveNoteClicked(updateNote, canSave, noteDetails);
  const deleteNoteHandler = (e) => onDeleteNoteClicked(deleteNote, note.id);

  let deleteButton = null;

  useEffect(() => {
    if (isSuccess || isDelSuccess) {
      setTitle(REPLACEMENT.emptyString);
      setText(REPLACEMENT.emptyString);
      setUserId(REPLACEMENT.emptyString);
      navigate(PATH.DASH.NOTE.overview);
    }
  }, [isSuccess, isDelSuccess, navigate]);

  if (isManager || isAdmin) {
    deleteButton = <DeleteButton onClick={deleteNoteHandler} />;
  }

  const editNoteFormProps = {
    title,
    text,
    completed,
    userId,
    setTitle,
    setText,
    setCompleted,
    setUserId,
    saveNoteHandler,
    canSave,
    deleteButton,
    errClass,
    validTitleClass,
    validTextClass,
    errContent,
    options,
    created,
    updated,
    note,
  };

  return <EditNoteFormUI editNoteFormProps={editNoteFormProps} />;
}

export default EditNoteForm;
