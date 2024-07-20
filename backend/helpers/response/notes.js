import { HTTP_STATUS_CODES, MSG } from '../../config/common/constants.js';

/**
 * @function sendNoteNotFound
 * @description Sends a 400 Bad Request response indicating the note was not found.
 */
export function sendNoteNotFound(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.NOTE.ERROR.NOT_FOUND });
}

/**
 * @function sendNoteAllFieldsRequired
 * @description Sends a 400 Bad Request response indicating all fields are required.
 */
export function sendNoteAllFieldsRequired(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.NOTE.ERROR.ALL_FIELDS_REQUIRED });
}

/**
 * @function sendNoteDuplicateTitle
 * @description Sends a 409 Conflict response indicating a duplicate note title.
 */
export function sendNoteDuplicateTitle(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.CONFLICT)
    .json({ message: MSG.NOTE.ERROR.DUPLICATE_TITLE });
}

/**
 * @function sendNoteCreatedSuccess
 * @description Sends a 201 Created response indicating a new note was created successfully.
 */
export function sendNoteCreatedSuccess(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.SUCCESS.CREATED)
    .json({ message: MSG.NOTE.SUCCESS.NEW_NOTE_CREATED });
}

/**
 * @function sendNoteCreatedError
 * @description Sends a 400 Bad Request response indicating invalid note data.
 */
export function sendNoteCreatedError(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.NOTE.ERROR.INVALID_DATA });
}

/**
 * @function sendNoteIdRequired
 * @description Sends a 400 Bad Request response indicating the note ID is required.
 */
export function sendNoteIdRequired(res) {
  return res
    .status(HTTP_STATUS_CODES.CLIENT.ERROR.BAD_REQUEST)
    .json({ message: MSG.NOTE.ERROR.ID_REQUIRED });
}

/**
 * @function sendNoteDeleted
 * @description Sends a 200 OK response indicating the note was deleted successfully.
 */
export function sendNoteDeleted(res, noteTitle, noteId) {
  return res.status(HTTP_STATUS_CODES.CLIENT.SUCCESS.OK).json({
    message: MSG.NOTE.SUCCESS.DELETED(noteTitle, noteId),
  });
}

/**
 * @function sendNoteUpdated
 * @description Sends a response indicating the note was updated successfully.
 */
export function sendNoteUpdated(res, noteTitle) {
  return res.json({
    message: MSG.NOTE.SUCCESS.UPDATED(noteTitle),
  });
}
