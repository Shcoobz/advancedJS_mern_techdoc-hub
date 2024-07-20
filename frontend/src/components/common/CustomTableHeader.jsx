function CustomTableHeader({ label }) {
  return (
    <th scope='col' className={'table__th table__th--center table__th--edit'}>
      {label}
    </th>
  );
}

export default CustomTableHeader;
