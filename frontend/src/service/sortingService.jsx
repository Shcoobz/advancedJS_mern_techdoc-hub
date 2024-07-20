import { REPLACEMENT, SORTING, UI } from '../config/constants';
import Note from '../features/notes/components/Note/Note';
import User from '../features/users/components/User/User';
import { goToNoteId, goToUserId } from './navigationService';

export function getFilteredIds(ids, entities, username, isManager, isAdmin) {
  if (isManager || isAdmin) {
    return [...ids];
  }

  return ids.filter((id) => entities[id].user === username);
}

export function getStatus(completed) {
  return completed ? UI.DASH.NOTE.LABEL.completed : UI.DASH.NOTE.LABEL.open;
}

export function renderTableContent(filteredIds, entities, navigate, type) {
  return filteredIds.map((id) => {
    const entity = entities[id];

    const onEdit =
      type === SORTING.TYPE.user
        ? () => goToUserId(navigate, id)()
        : () => goToNoteId(navigate, id)();

    if (type === SORTING.TYPE.user) {
      return (
        <User
          key={id}
          userId={id}
          username={entity.username}
          roles={entity.roles.join(REPLACEMENT.commaSpace)}
          onEdit={onEdit}
        />
      );
    } else if (type === SORTING.TYPE.note) {
      const status = getStatus(entity.completed);

      return (
        <Note
          key={id}
          noteId={id}
          status={status}
          createdAt={entity.createdAt}
          updatedAt={entity.updatedAt}
          title={entity.title}
          user={entity.username}
          onEdit={onEdit}
        />
      );
    }
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
