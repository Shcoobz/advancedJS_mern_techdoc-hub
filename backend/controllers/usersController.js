import User from '../models/User.js';
import Note from '../models/Note.js';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import { CONFIG, HTTP_STATUS_CODES, MSG } from '../config/common/constants.js';
import {
  sendSpecificFieldsRequired,
  sendUserAllFieldsRequired,
  sendUserCreated,
  sendUserDeleted,
  sendUserDuplicateUsername,
  sendUserHasAssignedNotes,
  sendUserIdRequired,
  sendUserInvalidData,
  sendUserNotFound,
} from '../helpers/response/user.js';
import {
  createUserObject,
  findUserById,
  findUserByName,
  hashPassword,
} from '../services/userService.js';

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password').lean();

  if (!users?.length) return sendUserNotFound(res);

  res.json(users);
});

// @desc Create new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
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
});

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const { id, username, roles, active, password } = req.body;

  if (!isUserValid({ id, username, roles, active }))
    return sendSpecificFieldsRequired(res);

  const user = await User.findById(id).exec();

  if (!user) return sendUserNotFound(res);

  const duplicate = await findUserByName(username);

  if (duplicate && duplicate?._id.toString() !== id)
    return sendUserDuplicateUsername(res);

  updateUser(user, { username, roles, active });

  if (password) user.password = await hashPassword(password);

  const updatedUser = await user.save();

  sendUserUpdatedResponse(res, updatedUser.username);
});

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) return sendUserIdRequired(res);

  const note = await Note.findOne({ user: id }).lean().exec();
  if (note) return sendUserHasAssignedNotes(res);

  const user = await findUserById(id);
  if (!user) return sendUserNotFound(res);

  await user.deleteOne();

  sendUserDeleted(res, user);
});

export { getAllUsers, createNewUser, updateUser, deleteUser };
