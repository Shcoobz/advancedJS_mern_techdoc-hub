import { REPLACEMENT, SORTING, UI } from '../../../config/constants';
import { goToUserId } from '../../../service/navigationService';

import User from '../components/User/User';

export function getFilteredIds(ids, entities, username, isManager, isAdmin) {
  if (isManager || isAdmin) {
    return ids;
  }

  return ids.filter((id) => entities[id].username === username);
}

export function renderTableContent(filteredIds, entities, navigate) {
  return filteredIds.map((userId) => {
    const user = entities[userId];

    function onEdit() {
      return goToUserId(navigate, userId)();
    }

    return (
      <User
        key={user.id}
        userId={user.id}
        username={user.username}
        roles={user.roles.join(', ')}
        onEdit={onEdit}
      />
    );
  });
}

export function getSortDirectionSymbol(key, sortConfig, resetSort) {
  if (sortConfig.key === key) {
    return (
      <>
        <span
          title={
            sortConfig.direction === SORTING.DIRECTION.ascending
              ? UI.DASH.NOTE.LABEL.sortDesc
              : UI.DASH.NOTE.LABEL.sortAsc
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
          title={UI.DASH.NOTE.LABEL.resetSorting}
          className='table__reset-sort-symbol'>
          {SORTING.SYMBOL.reset}
        </span>
      </>
    );
  }

  return REPLACEMENT.emptyString;
}
