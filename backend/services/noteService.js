import Note from '../models/Note.js';
import User from '../models/User.js';
import { CONFIG } from '../config/common/constants.js';

export async function findNotes() {
  return Note.find().lean();
}

export async function findNoteById(id) {
  return await Note.findById(id).exec();
}

export async function findUserForNote(userId) {
  const user = await User.findById(userId).lean().exec();
  return user;
}

export async function enrichNotesWithUsers(notes) {
  return await Promise.all(
    notes.map(async (note) => {
      const user = await findUserForNote(note.user);
      return { ...note, username: user.username };
    })
  );
}

export async function findNoteByTitle(title) {
  return await Note.findOne({ title })
    .collation({
      locale: CONFIG.LOCALE_SETTINGS.DEFAULT_LOCALE,
      strength: CONFIG.LOCALE_SETTINGS.DEFAULT_STRENGTH,
    })
    .lean()
    .exec();
}

export function isNoteValid({ id, user, title, text, completed }) {
  return id && user && title && text && typeof completed === 'boolean';
}

export function updateNoteFields(note, updates) {
  const { user, title, text, completed } = updates;

  note.user = user;
  note.title = title;
  note.text = text;
  note.completed = completed;
}

export function extractNoteDetails(note) {
  const noteTitle = note.title;
  const noteId = note._id;
  return { noteTitle, noteId };
}
