import Note from '../models/Note.js';
import User from '../models/User.js';
import { CONFIG } from '../config/common/constants.js';

/**
 * @function findNotes
 * @description Finds all notes.
 */
export async function findNotes() {
  return Note.find().lean();
}

/**
 * @function findNoteById
 * @description Finds a note by its ID.
 */
export async function findNoteById(id) {
  return await Note.findById(id).exec();
}

/**
 * @function findUserForNote
 * @description Finds the user associated with a note by user ID.
 */
export async function findUserForNote(userId) {
  const user = await User.findById(userId).lean().exec();

  return user;
}

/**
 * @function enrichNotesWithUsers
 * @description Enriches notes with associated user information.
 */
export async function enrichNotesWithUsers(notes) {
  return await Promise.all(
    notes.map(async (note) => {
      const user = await findUserForNote(note.user);

      return { ...note, username: user.username };
    })
  );
}

/**
 * @function findNoteByTitle
 * @description Finds a note by its title with collation settings.
 */
export async function findNoteByTitle(title) {
  return await Note.findOne({ title })
    .collation({
      locale: CONFIG.LOCALE_SETTINGS.DEFAULT_LOCALE,
      strength: CONFIG.LOCALE_SETTINGS.DEFAULT_STRENGTH,
    })
    .lean()
    .exec();
}

/**
 * @function isNoteValid
 * @description Validates the fields of a note.
 */
export function isNoteValid({ id, user, title, text, completed }) {
  return id && user && title && text && typeof completed === 'boolean';
}

/**
 * @function updateNoteFields
 * @description Updates the fields of a note with provided values.
 */
export function updateNoteFields(note, updates) {
  const { user, title, text, completed } = updates;

  note.user = user;
  note.title = title;
  note.text = text;
  note.completed = completed;
}

/**
 * @function extractNoteDetails
 * @description Extracts and returns the title and ID of a note.
 */
export function extractNoteDetails(note) {
  const noteTitle = note.title;
  const noteId = note._id;
  return { noteTitle, noteId };
}
