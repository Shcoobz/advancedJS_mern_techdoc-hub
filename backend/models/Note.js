import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

/**
 * @constant AutoIncrement
 * @description Initializes the auto-increment plugin for Mongoose.
 */
const AutoIncrement = AutoIncrementFactory(mongoose);

/**
 * @constant noteSchema
 * @description Mongoose schema for notes with fields for user, title, text, status, timestamp and auto-incrementing ticket numbers.
 */
const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

noteSchema.plugin(AutoIncrement, {
  inc_field: 'ticket',
  id: 'ticketNums',
  start_seq: 500,
});

export default mongoose.model('Note', noteSchema);
