/**
 * @function onTitleChanged
 * @description Updates the title state with the value from the event target.
 */
export function onTitleChanged(e, setTitle) {
  return setTitle(e.target.value);
}

/**
 * @function onTextChanged
 * @description Updates the text state with the value from the event target.
 */
export function onTextChanged(e, setText) {
  return setText(e.target.value);
}

/**
 * @function onCompletedChanged
 * @description Toggles the completed state between true and false.
 */
export function onCompletedChanged(e, setCompleted) {
  return setCompleted((prev) => !prev);
}

/**
 * @function onUserIdChanged
 * @description Updates the user ID state with the value from the event target.
 */
export function onUserIdChanged(e, setUserId) {
  return setUserId(e.target.value);
}

/**
 * @function onDeleteNoteClicked
 * @description Triggers the deletion of a note with the given ID.
 */
export async function onDeleteNoteClicked(deleteNote, noteId) {
  await deleteNote({ id: noteId });
}

/**
 * @function onSaveNoteClicked
 * @description Handles saving a note by either adding a new note or updating an existing one, based on the provided note details and save permission.
 */
export async function onSaveNoteClicked(action, canSave, noteDetails) {
  const { id, userId, title, text, completed } = noteDetails;

  if (canSave) {
    if (id) {
      // Update
      await action({ id, user: userId, title, text, completed });
    } else {
      // Add new
      await action({ user: userId, title, text });
    }
  }
}
