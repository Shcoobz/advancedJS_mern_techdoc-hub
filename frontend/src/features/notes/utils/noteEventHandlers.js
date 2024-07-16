export function onTitleChanged(e, setTitle) {
  return setTitle(e.target.value);
}

export function onTextChanged(e, setText) {
  return setText(e.target.value);
}

export function onCompletedChanged(e, setCompleted) {
  return setCompleted((prev) => !prev);
}

export function onUserIdChanged(e, setUserId) {
  return setUserId(e.target.value);
}

export async function onDeleteNoteClicked(deleteNote, noteId) {
  await deleteNote({ id: noteId });
}

export async function onSaveNoteClicked(updateNote, canSave, noteDetails) {
  const { id, userId, title, text, completed } = noteDetails;

  if (canSave) {
    await updateNote({ id, user: userId, title, text, completed });
  }
}
