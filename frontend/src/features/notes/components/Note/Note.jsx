import { memo } from 'react';
import NoteComponent from './NoteComponent';

/**
 * @constant Note
 * @description A memoized wrapper around the NoteComponent to optimize rendering performance by preventing unnecessary re-renders.
 */
const Note = memo(NoteComponent);

export default Note;
