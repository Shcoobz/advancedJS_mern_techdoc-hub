import { REPLACEMENT, SORTING, UI } from '../../../config/constants';
import { goToNoteId } from '../../../service/navigationService';
import Note from '../components/Note/Note';

export function getFilteredIds(ids, entities, username, isManager, isAdmin) {
  if (isManager || isAdmin) {
    return [...ids];
  }

  return ids.filter((id) => entities[id].user === username);
}

export function getStatus(completed) {
  return completed ? UI.DASH.NOTE.LABEL.completed : UI.DASH.NOTE.LABEL.open;
}

export function renderTableContent(filteredIds, entities, navigate) {
  return filteredIds.map((noteId) => {
    const note = entities[noteId];
    const status = getStatus(note.completed);

    function onEdit() {
      return goToNoteId(navigate, noteId)();
    }

    return (
      <Note
        key={noteId}
        noteId={noteId}
        status={status}
        createdAt={note.createdAt}
        updatedAt={note.updatedAt}
        title={note.title}
        user={note.username}
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
