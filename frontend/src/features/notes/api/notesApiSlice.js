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
} from '../utils/noteUtils';

export const initialState = notesAdapter.getInitialState();

export const notesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: getNoteQuery,
      transformResponse: transformNoteResponse,
      providesTags: provideNotesTags,
    }),
    addNewNote: builder.mutation({
      query: addNewNoteQuery,
      invalidatesTags: invalidateNotesTags,
    }),
    updateNote: builder.mutation({
      query: updateNoteQuery,
      invalidatesTags: invalidateNoteTag,
    }),
    deleteNote: builder.mutation({
      query: deleteNoteQuery,
      invalidatesTags: invalidateNoteTag,
    }),
  }),
});

export const {
  useGetNotesQuery,
  useAddNewNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = notesApiSlice;

// returns the query result object
export const selectNotesResult = notesApiSlice.endpoints.getNotes.select();

// creates memoized selector
const selectNotesData = createSelector(
  selectNotesResult,
  (notesResult) => notesResult.data // normalized state object with ids & entities
);

export const {
  selectAll: selectAllNotes,
  selectById: selectNoteById,
  selectIds: selectNoteIds,
} = notesAdapter.getSelectors((state) => selectNotesData(state) ?? initialState);
