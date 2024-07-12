import User from '../models/User.js';
import bcrypt from 'bcrypt';

export async function findActiveUserByUsername(username) {
  const user = await User.findOne({ username }).exec();
  return user && user.active ? user : null;
}

export async function validateUserPassword(password, hash) {
  return bcrypt.compare(password, hash);
}
