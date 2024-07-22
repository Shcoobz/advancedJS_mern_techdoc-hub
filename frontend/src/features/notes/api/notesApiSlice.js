import { createSelector } from '@reduxjs/toolkit';
import { apiSlice } from '../../../app/api/apiSlice';
import {
  notesAdapter,
  transformNoteResponse,
  provideNotesTags,
  getNoteQuery,
  addNewNoteQuery,
  invalidateNotesTags,
  updateNoteQuery,
  invalidateNoteTag,
  deleteNoteQuery,
} from '../utils/noteApiSliceUtils';

/**
 * @constant initialState
 * @description Initial state for notes using the notes adapter.
 */
export const initialState = notesAdapter.getInitialState();

/**
 * @constant notesApiSlice
 * @description API slice for notes management, including queries and mutations for CRUD operations.
 */
export const notesApiSlice = apiSlice.injectEndpoints({
  /**
   * @function endpoints
   * @description Defines API endpoints for notes management.
   */
  endpoints: (builder) => ({
    /**
     * @function getNotes
     * @description Query to fetch notes with transformation and tag provisioning.
     */
    getNotes: builder.query({
      query: getNoteQuery,
      transformResponse: transformNoteResponse,
      providesTags: provideNotesTags,
    }),
    /**
     * @function addNewNote
     * @description Mutation to add a new note, invalidating note tags.
     */
    addNewNote: builder.mutation({
      query: addNewNoteQuery,
      invalidatesTags: invalidateNotesTags,
    }),
    /**
     * @function updateNote
     * @description Mutation to update an existing note, invalidating the specific note tag.
     */
    updateNote: builder.mutation({
      query: updateNoteQuery,
      invalidatesTags: invalidateNoteTag,
    }),
    /**
     * @function deleteNote
     * @description Mutation to delete a note, invalidating the specific note tag.
     */
    deleteNote: builder.mutation({
      query: deleteNoteQuery,
      invalidatesTags: invalidateNoteTag,
    }),
  }),
});

/**
 * @constant hooks
 * @description Hooks for performing CRUD operations on notes: fetching, adding, updating, and deleting.
 */
export const {
  useGetNotesQuery,
  useAddNewNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = notesApiSlice;

/**
 * @constant selectNotesResult
 * @description Selector to get the notes query result object.
 */
export const selectNotesResult = notesApiSlice.endpoints.getNotes.select();

/**
 * @constant selectNotesData
 * @description Memoized selector to get the normalized notes data.
 */
const selectNotesData = createSelector(
  selectNotesResult,
  (notesResult) => notesResult.data // normalized state object with ids & entities
);

/**
 * @constant selectors
 * @description Selectors for accessing notes from the state: all notes, note by ID, and note IDs.
 */
export const {
  selectAll: selectAllNotes,
  selectById: selectNoteById,
  selectIds: selectNoteIds,
} = notesAdapter.getSelectors((state) => selectNotesData(state) ?? initialState);
