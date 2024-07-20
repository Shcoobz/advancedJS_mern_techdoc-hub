import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { CONFIG } from '../config/common/constants.js';

/**
 * @function findUserByName
 * @description Finds a user by username with collation settings.
 */
export async function findUserByName(username) {
  return await User.findOne({ username })
    .collation({
      locale: CONFIG.LOCALE_SETTINGS.DEFAULT_LOCALE,
      strength: CONFIG.LOCALE_SETTINGS.DEFAULT_STRENGTH,
    })
    .lean()
    .exec();
}

/**
 * @function findUserById
 * @description Finds a user by ID.
 */
export async function findUserById(id) {
  return await User.findById(id).exec();
}

/**
 * @function hashPassword
 * @description Hashes a password using bcrypt.
 */
export async function hashPassword(password) {
  return await bcrypt.hash(password, CONFIG.BCRYPT.SALT_ROUNDS);
}

/**
 * @function createUserObject
 * @description Creates a user object with a hashed password and optional roles.
 */
export function createUserObject(username, hashedPwd, roles) {
  if (!Array.isArray(roles) || !roles.length) {
    return { username, password: hashedPwd };
  } else {
    return { username, password: hashedPwd, roles };
  }
}

/**
 * @function isUserValid
 * @description Validates the fields of a user object.
 */
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

/**
 * @function updateUserFields
 * @description Updates user fields with provided values.
 */
export function updateUserFields(user, { username, roles, active }) {
  user.username = username;
  user.roles = roles;
  user.active = active;
}

/**
 * @function extractUserDetails
 * @description Extracts and returns the username and ID of a user.
 */
export function extractUserDetails(user) {
  const { username, _id: userId } = user;
  return { username, userId };
}
