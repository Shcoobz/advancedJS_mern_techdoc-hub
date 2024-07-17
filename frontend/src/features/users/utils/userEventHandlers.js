export function onUsernameChanged(e, setUsername) {
  return setUsername(e.target.value);
}

export function onPasswordChanged(e, setPassword) {
  return setPassword(e.target.value);
}

export function onRolesChanged(e, setRoles) {
  const values = Array.from(e.target.selectedOptions, (option) => option.value);
  setRoles(values);
}

export function onActiveChanged(e, setActive) {
  return setActive((prev) => !prev);
}

export async function onSaveUserClicked(e, updateUser, userDetails) {
  const { id, username, password, roles, active } = userDetails;

  if (password) {
    await updateUser({ id, username, password, roles, active });
  } else {
    await updateUser({ id, username, roles, active });
  }
}

export async function onDeleteUserClicked(e, deleteUser, userId) {
  await deleteUser({ id: userId });
}
