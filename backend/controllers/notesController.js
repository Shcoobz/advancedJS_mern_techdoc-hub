import Note from '../models/Note.js';
import asyncHandler from 'express-async-handler';
import {
  sendNoteAllFieldsRequired,
  sendNoteNotFound,
  sendNoteDuplicateTitle,
  sendNoteCreatedSuccess,
  sendNoteCreatedError,
  sendNoteIdRequired,
  sendNoteDeleted,
} from '../helpers/response/notes.js';
import {
  enrichNotesWithUsers,
  extractNoteDetails,
  findNoteById,
  findNoteByTitle,
  findNotes,
  isNoteValid,
  updateNoteFields,
} from '../services/noteService.js';
import { sendNoteUpdated } from '../helpers/response/notes.js';

// @desc Get all notes
// @route GET /notes
// @access Private
const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await findNotes();
  if (!notes?.length) return sendNoteNotFound(res);

  const notesWithUser = await enrichNotesWithUsers(notes);
  res.json(notesWithUser);
});

// @desc Create new note
// @route POST /notes
// @access Private
const createNewNote = asyncHandler(async (req, res) => {
  const { user, title, text } = req.body;
  if (!user || !title || !text) return sendNoteAllFieldsRequired(res);

  const duplicate = await findNoteByTitle(title);
  if (duplicate) return sendNoteDuplicateTitle(res);

  const note = await Note.create({ user, title, text });
  if (note) {
    return sendNoteCreatedSuccess(res);
  } else {
    return sendNoteCreatedError(res);
  }
});

// @desc Update a note
// @route PATCH /notes
// @access Private
const updateNote = asyncHandler(async (req, res) => {
  const { id, user, title, text, completed } = req.body;
  if (!isNoteValid(req.body)) return sendNoteAllFieldsRequired(res);

  const note = await Note.findById(id).exec();
  if (!note) return sendNoteNotFound(res);

  const duplicate = await findNoteByTitle(title);
  if (duplicate && duplicate?._id.toString() !== id) return sendNoteDuplicateTitle(res);

  updateNoteFields(note, { user, title, text, completed });

  const updatedNote = await note.save();

  sendNoteUpdated(res, updatedNote.title);
});

// @desc Delete a note
// @route DELETE /notes
// @access Private
const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) return sendNoteIdRequired(res);

  const note = await findNoteById(id);
  if (!note) return sendNoteNotFound(res);

  const { noteTitle, noteId } = extractNoteDetails(note);

  await note.deleteOne();

  sendNoteDeleted(res, noteTitle, noteId);
});

export { getAllNotes, createNewNote, updateNote, deleteNote };
