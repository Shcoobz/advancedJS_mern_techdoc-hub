import { EditButton } from '../../../../components/common/Buttons';
import { userComponentUIPropTypes } from '../../../../config/propTypes';

/**
 * @function UserComponentUI
 * @description Renders a table row for a user with editable information.
 */
function UserComponentUI({ username, userRolesString, cellStatus, onEdit }) {
  return (
    <tr className={`table__row user ${cellStatus}`}>
      <td className={`table__cell ${cellStatus}`}>{username}</td>
      <td className={`table__cell ${cellStatus}`}>{userRolesString}</td>
      <td className={`table__cell ${cellStatus}`}>
        <EditButton onClick={onEdit} />
      </td>
    </tr>
  );
}

/**
 * @function UserComponentUI.propTypes
 * @desc Displays user details in a table row with an edit button.
 */
UserComponentUI.propTypes = userComponentUIPropTypes;

export default UserComponentUI;
