export function generateRoleOptions(roles) {
  return roles.map((role) => (
    <option key={role} value={role}>
      {role}
    </option>
  ));
}
