import { EditButton } from '../../../../components/common/Buttons';

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

export default UserComponentUI;