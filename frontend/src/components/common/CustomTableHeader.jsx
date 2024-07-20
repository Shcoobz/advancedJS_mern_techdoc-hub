function CustomTableHeader({ label, additionalClass }) {
  return (
    <th scope='col' className={`table__th table__th--center ${additionalClass}`}>
      {label}
    </th>
  );
}

export default CustomTableHeader;
