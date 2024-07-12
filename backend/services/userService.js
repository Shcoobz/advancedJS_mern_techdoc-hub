import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { CONFIG } from '../config/common/constants.js';

export async function findUserByName(username) {
  return await User.findOne({ username })
    .collation({
      locale: CONFIG.LOCALE_SETTINGS.DEFAULT_LOCALE,
      strength: CONFIG.LOCALE_SETTINGS.DEFAULT_STRENGTH,
    })
    .lean()
    .exec();
}

export async function findUserById(id) {
  return await User.findById(id).exec();
}

export async function hashPassword(password) {
  return await bcrypt.hash(password, CONFIG.BCRYPT.SALT_ROUNDS);
}

export function createUserObject(username, hashedPwd, roles) {
  if (!Array.isArray(roles) || !roles.length) {
    return { username, password: hashedPwd };
  } else {
    return { username, password: hashedPwd, roles };
  }
}

export function isUserValid(user) {
  const { id, username, roles, active } = user;
  return (
    id &&
    username &&
    Array.isArray(roles) &&
    roles.length > 0 &&
    typeof active === 'boolean'
  );
}

export function updateUser(user, { username, roles, active }) {
  user.username = username;
  user.roles = roles;
  user.active = active;
}

export function extractUserDetails(user) {
  const { username, _id: userId } = user;
  return { username, userId };
}
