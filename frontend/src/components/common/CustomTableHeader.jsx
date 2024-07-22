import { customTableHeaderPropTypes } from '../../config/propTypes';

function CustomTableHeader({ label }) {
  return (
    <th scope='col' className={'table__th table__th--center table__th--edit'}>
      {label}
    </th>
  );
}

CustomTableHeader.propTypes = customTableHeaderPropTypes;

export default CustomTableHeader;
