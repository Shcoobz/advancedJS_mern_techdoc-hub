import { HTTP_STATUS_CODES, MSG } from '../../config/common/constants.js';
import { extractNoteDetails } from '../../services/noteService.js';

export function sendNoteNotFound(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.NOTE.ERROR.NOT_FOUND });
}

export function sendNoteAllFieldsRequired(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.NOTE.ERROR.ALL_FIELDS_REQUIRED });
}

export function sendNoteDuplicateTitle(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.CONFLICT)
    .json({ message: MSG.NOTE.ERROR.DUPLICATE_TITLE });
}

export function sendNoteCreatedSuccess(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.SUCCESS.CREATED)
    .json({ message: MSG.NOTE.SUCCESS.NEW_NOTE_CREATED });
}

export function sendNoteCreatedError(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.NOTE.ERROR.INVALID_DATA });
}

export function sendNoteIdRequired(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.NOTE.ERROR.ID_REQUIRED });
}

export function sendNoteDeleted(res, note) {
  const { noteTitle, noteId } = extractNoteDetails(note);

  res.status(HTTP_STATUS_CODES.CLIENT.SUCCESS.OK).json({
    message: MSG.NOTE.ERROR.DELETED(noteTitle, noteId),
  });
}

export function sendNoteUpdated(res, noteTitle) {
  return res.json({
    message: MSG.NOTE.SUCCESS.UPDATED(noteTitle),
  });
}
