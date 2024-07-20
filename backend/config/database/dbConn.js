import mongoose from 'mongoose';

/**
 * @function connectDB
 * @description Connects to the MongoDB database using the URI specified in the environment variables.
 */
async function connectDB() {
  try {
    mongoose.connect(process.env.DATABASE_URI);
  } catch (err) {
    console.log(err);
  }
}

export default connectDB;
