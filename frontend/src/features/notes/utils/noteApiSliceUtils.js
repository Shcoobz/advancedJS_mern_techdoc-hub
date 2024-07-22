import { createEntityAdapter } from '@reduxjs/toolkit';
import { HTTP_STATUS_CODES, CONFIG, PATH, SORTING } from '../../../config/constants';
import { initialState } from '../api/notesApiSlice';

/**
 * @function notesAdapter
 * @description Creates an entity adapter for notes with sorting by completion status.
 */
export const notesAdapter = createEntityAdapter({
  sortComparer: (a, b) =>
    a.completed === b.completed
      ? SORTING.ORDER.equal
      : a.completed
      ? SORTING.ORDER.ascending
      : SORTING.ORDER.descending,
});

/**
 * @function getNoteQuery
 * @description Returns query configuration for fetching notes, including URL and status validation.
 */
export function getNoteQuery() {
  return {
    url: PATH.DASH.NOTE.notes,
    validateStatus: validateNoteResponseStatus,
  };
}

/**
 * @function validateNoteResponseStatus
 * @description Validates if the HTTP response is successful and the result is not an error.
 */
function validateNoteResponseStatus(response, result) {
  return response.status === HTTP_STATUS_CODES.CLIENT.SUCCESS.ok && !result.isError;
}

/**
 * @function transformNoteResponse
 * @description Transforms API response data to match the entity adapter format and initializes the state.
 */
export function transformNoteResponse(responseData) {
  const loadedNotes = responseData.map((note) => {
    return { ...note, id: note._id };
  });

  return notesAdapter.setAll(initialState, loadedNotes);
}

/**
 * @function provideNotesTags
 * @description Provides tags for caching and invalidation based on the result of a notes query.
 */
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

/**
 * @function addNewNoteQuery
 * @description Returns query configuration for adding a new note, including URL, method, and request body.
 */
export function addNewNoteQuery(initialNote) {
  return {
    url: PATH.DASH.NOTE.notes,
    method: CONFIG.HTTP_METHOD.post,
    body: { ...initialNote },
  };
}

/**
 * @function updateNoteQuery
 * @description Returns query configuration for updating an existing note, including URL, method, and request body.
 */
export function updateNoteQuery(initialNote) {
  return {
    url: PATH.DASH.NOTE.notes,
    method: CONFIG.HTTP_METHOD.patch,
    body: { ...initialNote },
  };
}

/**
 * @function deleteNoteQuery
 * @description Returns query configuration for deleting a note, including URL, method, and request body.
 */
export function deleteNoteQuery({ id }) {
  return {
    url: PATH.DASH.NOTE.notes,
    method: CONFIG.HTTP_METHOD.delete,
    body: { id },
  };
}

/**
 * @function invalidateNotesTags
 * @description Returns tags to invalidate the cache for notes.
 */
export function invalidateNotesTags() {
  return [{ type: CONFIG.TAG_TYPE.NOTE.type, id: CONFIG.TAG_TYPE.NOTE.id }];
}

/**
 * @function invalidateNoteTag
 * @description Returns tags to invalidate the cache for a specific note based on its ID.
 */
export function invalidateNoteTag(result, error, arg) {
  return [{ type: CONFIG.TAG_TYPE.NOTE.type, id: arg.id }];
}
