import { CONFIG, REPLACEMENT, SORTING, UI } from '../../../config/constants';

export function getRolePriority(roles) {
  if (roles.includes(CONFIG.ROLE.admin)) return 1;
  if (roles.includes(CONFIG.ROLE.manager)) return 2;
  if (roles.includes(CONFIG.ROLE.employee)) return 3;
  return 4;
}

export function getSortDirectionSymbol(key, sortConfig, resetSort) {
  if (sortConfig.key === key) {
    return (
      <>
        <span
          title={
            sortConfig.direction === SORTING.DIRECTION.ascending
              ? UI.DASH.USER.LABEL.sortDesc
              : UI.DASH.USER.LABEL.sortAsc
          }
          className='table__sort-symbol'>
          {sortConfig.direction === SORTING.DIRECTION.ascending
            ? SORTING.SYMBOL.ascending
            : SORTING.SYMBOL.descending}
        </span>
        <span
          onClick={(e) => {
            e.stopPropagation();
            resetSort();
          }}
          title={UI.DASH.USER.LABEL.resetSorting}
          className='table__reset-sort-symbol'>
          {SORTING.SYMBOL.reset}
        </span>
      </>
    );
  }

  return REPLACEMENT.emptyString;
}
