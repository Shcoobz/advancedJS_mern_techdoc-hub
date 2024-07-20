import User from '../models/User.js';
import Note from '../models/Note.js';
import {
  sendSpecificFieldsRequired,
  sendUserAllFieldsRequired,
  sendUserCreated,
  sendUserDeleted,
  sendUserDuplicateUsername,
  sendUserHasAssignedNotes,
  sendUserUpdated,
  sendUserIdRequired,
  sendUserInvalidData,
  sendUserNotFound,
} from '../helpers/response/users.js';
import {
  createUserObject,
  extractUserDetails,
  findUserById,
  findUserByName,
  hashPassword,
  isUserValid,
  updateUserFields,
} from '../services/userService.js';

/**
 * @function getAllUsers
 * @description Get all users.
 * @route GET /users
 * @access Private
 */
const getAllUsers = async (req, res) => {
  const users = await User.find().select('-password').lean();

  if (!users?.length) return sendUserNotFound(res);

  res.json(users);
};

/**
 * @function createNewUser
 * @description Create new user.
 * @route POST /users
 * @access Private
 */
const createNewUser = async (req, res) => {
  const { username, password, roles } = req.body;
  if (!username || !password) return sendUserAllFieldsRequired(res);

  const duplicate = await findUserByName(username);
  if (duplicate) return sendUserDuplicateUsername(res);

  const hashedPwd = await hashPassword(password);

  const userObject = createUserObject(username, hashedPwd, roles);

  const newUser = await User.create(userObject);

  if (newUser) {
    return sendUserCreated(res, newUser.username);
  } else {
    return sendUserInvalidData(res);
  }
};

/**
 * @function updateUser
 * @description Update a user.
 * @route PATCH /users
 * @access Private
 */
const updateUser = async (req, res) => {
  const { id, username, roles, active, password } = req.body;

  if (!isUserValid({ id, username, roles, active }))
    return sendSpecificFieldsRequired(res);

  const user = await User.findById(id).exec();

  if (!user) return sendUserNotFound(res);

  const duplicate = await findUserByName(username);

  if (duplicate && duplicate?._id.toString() !== id)
    return sendUserDuplicateUsername(res);

  updateUserFields(user, { username, roles, active });

  if (password) user.password = await hashPassword(password);

  const updatedUser = await user.save();

  sendUserUpdated(res, updatedUser.username);
};

/**
 * @function deleteUser
 * @description Delete a user.
 * @route DELETE /users
 * @access Private
 */
const deleteUser = async (req, res) => {
  const { id } = req.body;
  if (!id) return sendUserIdRequired(res);

  const note = await Note.findOne({ user: id }).lean().exec();
  if (note) return sendUserHasAssignedNotes(res);

  const user = await findUserById(id);
  if (!user) return sendUserNotFound(res);

  const { username, userId } = extractUserDetails(user);

  await user.deleteOne();

  sendUserDeleted(res, username, userId);
};

export { getAllUsers, createNewUser, updateUser, deleteUser };
