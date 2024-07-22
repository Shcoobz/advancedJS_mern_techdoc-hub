import { customTableHeaderPropTypes } from '../../config/propTypes';

/**
 * @function CustomTableHeader
 * @description Table header component with custom styling.
 */
function CustomTableHeader({ label }) {
  return (
    <th scope='col' className={'table__th table__th--center table__th--edit'}>
      {label}
    </th>
  );
}

/**
 * @constant CustomTableHeader.propTypes
 * @description Prop types for CustomTableHeader component.
 */
CustomTableHeader.propTypes = customTableHeaderPropTypes;

export default CustomTableHeader;
