import { createEntityAdapter } from '@reduxjs/toolkit';
import { HTTP_STATUS_CODES, CONFIG, PATH, SORTING } from '../../../config/constants';
import { initialState } from '../api/notesApiSlice';

export const notesAdapter = createEntityAdapter({
  sortComparer: (a, b) =>
    a.completed === b.completed
      ? SORTING.ORDER.equal
      : a.completed
      ? SORTING.ORDER.ascending
      : SORTING.ORDER.descending,
});

export function getNoteQuery() {
  return {
    url: PATH.DASH.NOTE.notes,
    validateStatus: validateNoteResponseStatus,
  };
}

function validateNoteResponseStatus(response, result) {
  return response.status === HTTP_STATUS_CODES.CLIENT.SUCCESS.ok && !result.isError;
}

export function transformNoteResponse(responseData) {
  const loadedNotes = responseData.map((note) => {
    return { ...note, id: note._id };
  });

  return notesAdapter.setAll(initialState, loadedNotes);
}

export function provideNotesTags(result) {
  if (result?.ids) {
    return [
      { type: CONFIG.TAG_TYPE.NOTE.type, id: CONFIG.TAG_TYPE.NOTE.id },
      ...result.ids.map((id) => ({ type: CONFIG.TAG_TYPE.NOTE.type, id })),
    ];
  } else {
    return [{ type: CONFIG.TAG_TYPE.NOTE.type, id: CONFIG.TAG_TYPE.NOTE.id }];
  }
}

export function addNewNoteQuery(initialNote) {
  return {
    url: PATH.DASH.NOTE.notes,
    method: CONFIG.HTTP_METHOD.post,
    body: { ...initialNote },
  };
}

export function updateNoteQuery(initialNote) {
  return {
    url: PATH.DASH.NOTE.notes,
    method: CONFIG.HTTP_METHOD.patch,
    body: { ...initialNote },
  };
}

export function deleteNoteQuery({ id }) {
  return {
    url: PATH.DASH.NOTE.notes,
    method: CONFIG.HTTP_METHOD.delete,
    body: { id },
  };
}

export function invalidateNotesTags() {
  return [{ type: CONFIG.TAG_TYPE.NOTE.type, id: CONFIG.TAG_TYPE.NOTE.id }];
}

export function invalidateNoteTag(result, error, arg) {
  return [{ type: CONFIG.TAG_TYPE.NOTE.type, id: arg.id }];
}
