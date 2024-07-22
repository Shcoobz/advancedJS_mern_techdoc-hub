/**
 * @function generateRoleOptions
 * @desc Generates an array of <option> elements for a <select> input based on the provided roles.
 */
export function generateRoleOptions(roles) {
  return roles.map((role) => (
    <option key={role} value={role}>
      {role}
    </option>
  ));
}
