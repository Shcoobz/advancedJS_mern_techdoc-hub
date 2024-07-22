import PropTypes from 'prop-types';

// Buttons

export const homeButtonPropTypes = {
  onClick: PropTypes.func.isRequired,
};

export const newNoteButtonPropTypes = {
  onClick: PropTypes.func.isRequired,
};

export const newUserButtonPropTypes = {
  onClick: PropTypes.func.isRequired,
};

export const userButtonPropTypes = {
  onClick: PropTypes.func.isRequired,
};

export const notesButtonPropTypes = {
  onClick: PropTypes.func.isRequired,
};

export const logoutButtonPropTypes = {
  onClick: PropTypes.func.isRequired,
};

export const deleteButtonPropTypes = {
  onClick: PropTypes.func.isRequired,
};

export const saveButtonPropTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export const editButtonPropTypes = {
  onClick: PropTypes.func.isRequired,
};

// Custom Header
export const customTableHeaderPropTypes = {
  label: PropTypes.string.isRequired,
};

// Sortable Header
export const searchableTableHeaderPropTypes = {
  columnKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  sortConfig: PropTypes.object.isRequired,
  requestSort: PropTypes.func.isRequired,
  resetSort: PropTypes.func.isRequired,
  additionalClass: PropTypes.string,
};

// Search Input
export const searchInputPropTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

// Login
export const loginFormPropTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errMsg: PropTypes.string,
  errRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  userRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  errClass: PropTypes.string,
  persist: PropTypes.bool.isRequired,
  handleUserInput: PropTypes.func.isRequired,
  handlePwdInput: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export const loginUIPropTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errMsg: PropTypes.string,
  errRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  userRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  errClass: PropTypes.string,
  persist: PropTypes.bool.isRequired,
  handleUserInput: PropTypes.func.isRequired,
  handlePwdInput: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

// Require Auth
export const requireAuthPropTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Welcome UI
export const dateDisplayPropTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export const greetingPropTypes = {
  username: PropTypes.string.isRequired,
};

export const navigationLinksPropTypes = {
  isManager: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export const welcomeUIPropTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  username: PropTypes.string.isRequired,
  isManager: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

//  Edit Note
export const editNoteFormPropTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const editNoteFormUIPropTypes = {
  editNoteFormProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    userId: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
    setText: PropTypes.func.isRequired,
    setCompleted: PropTypes.func.isRequired,
    setUserId: PropTypes.func.isRequired,
    updateNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
    canSave: PropTypes.bool.isRequired,
    errClass: PropTypes.string.isRequired,
    validTitleClass: PropTypes.string.isRequired,
    validTextClass: PropTypes.string.isRequired,
    errContent: PropTypes.string.isRequired,
    options: PropTypes.node.isRequired,
    created: PropTypes.string.isRequired,
    updated: PropTypes.string.isRequired,
    note: PropTypes.shape({
      id: PropTypes.string.isRequired,
      ticket: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
    }).isRequired,
    isManager: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired,
  }).isRequired,
};

// New Note
export const newNoteFormPropTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const newNoteFormUIPropTypes = {
  newNoteFormProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
    setText: PropTypes.func.isRequired,
    setUserId: PropTypes.func.isRequired,
    saveNoteHandler: PropTypes.func.isRequired,
    canSave: PropTypes.bool.isRequired,
    errClass: PropTypes.string.isRequired,
    validTitleClass: PropTypes.string.isRequired,
    validTextClass: PropTypes.string.isRequired,
    error: PropTypes.shape({
      data: PropTypes.shape({
        message: PropTypes.string,
      }),
    }),
    options: PropTypes.node.isRequired,
  }).isRequired,
};

// Note
export const noteComponentPropTypes = {
  noteId: PropTypes.string.isRequired,
};

export const noteUIPropTypes = {
  status: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
};

// Notes List
export const notesListUIPropTypes = {
  tableContent: PropTypes.arrayOf(PropTypes.element),
  setSearchTerm: PropTypes.func,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

// Edit User
export const editUserFormPropTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    active: PropTypes.bool.isRequired,
  }).isRequired,
};

export const editUserFormUIPropTypes = {
  editUserFormProps: PropTypes.shape({
    errClass: PropTypes.string.isRequired,
    errContent: PropTypes.string.isRequired,
    validUserClass: PropTypes.string.isRequired,
    validPwdClass: PropTypes.string.isRequired,
    validRolesClass: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    active: PropTypes.bool.isRequired,
    canSave: PropTypes.bool.isRequired,
    options: PropTypes.node.isRequired,
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    setRoles: PropTypes.func.isRequired,
    setActive: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    userDetails: PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      roles: PropTypes.arrayOf(PropTypes.string).isRequired,
      active: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
};

// New User Form
export const newUserFormUIPropTypes = {
  newUserFormProps: PropTypes.shape({
    username: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    setPassword: PropTypes.func.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    setRoles: PropTypes.func.isRequired,
    saveUserClicked: PropTypes.func.isRequired,
    canSave: PropTypes.bool.isRequired,
    error: PropTypes.shape({
      data: PropTypes.shape({
        message: PropTypes.string,
      }),
    }),
    errClass: PropTypes.string.isRequired,
    validUserClass: PropTypes.string.isRequired,
    validPwdClass: PropTypes.string.isRequired,
    validRolesClass: PropTypes.string.isRequired,
    options: PropTypes.node.isRequired,
  }).isRequired,
};

// User
export const userComponentPropTypes = {
  userId: PropTypes.string.isRequired,
};

export const userComponentUIPropTypes = {
  username: PropTypes.string.isRequired,
  userRolesString: PropTypes.string.isRequired,
  cellStatus: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
};

// User List
export const usersListUIPropTypes = {
  tableContent: PropTypes.arrayOf(PropTypes.node),
  setSearchTerm: PropTypes.func,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
};
