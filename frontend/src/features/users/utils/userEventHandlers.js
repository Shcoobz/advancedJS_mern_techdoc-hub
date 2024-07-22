/**
 * @function onUsernameChanged
 * @desc Updates the username state with the new value from the input field.
 */
export function onUsernameChanged(e, setUsername) {
  return setUsername(e.target.value);
}

/**
 * @function onPasswordChanged
 * @desc Updates the password state with the new value from the input field.
 */
export function onPasswordChanged(e, setPassword) {
  return setPassword(e.target.value);
}

/**
 * @function onRolesChanged
 * @desc Updates the roles state with the selected values from the multi-select input.
 */
export function onRolesChanged(e, setRoles) {
  const values = Array.from(e.target.selectedOptions, (option) => option.value);
  setRoles(values);
}

/**
 * @function onActiveChanged
 * @desc Toggles the active state of a user.
 */
export function onActiveChanged(e, setActive) {
  return setActive((prev) => !prev);
}

/**
 * @function onSaveUserClicked
 * @desc Handles the user save action, triggering an update with the given user details.
 */
export async function onSaveUserClicked(e, updateUser, userDetails) {
  const { id, username, password, roles, active } = userDetails;

  if (password) {
    await updateUser({ id, username, password, roles, active });
  } else {
    await updateUser({ id, username, roles, active });
  }
}

/**
 * @function onDeleteUserClicked
 * @desc Handles the user delete action, triggering a delete for the given user ID.
 */
export async function onDeleteUserClicked(e, deleteUser, userId) {
  await deleteUser({ id: userId });
}
