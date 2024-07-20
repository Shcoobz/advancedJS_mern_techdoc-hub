export const CONFIG = {
  root: 'root',
  credentials: 'include' /* !important: always send cookie */,
  tagTypes: ['Note', 'User'],
  TAG_TYPE: {
    NOTE: {
      type: 'Note',
      id: 'LIST',
    },
    USER: {
      type: 'User',
      id: 'LIST',
    },
  },
  SLICE: {
    name: 'auth',
  },
  NODE: {
    env: 'development',
    production: 'production',
  },
  DATE: {
    locale: 'de-AT',
    dateStyle: 'full',
    timeStyle: 'long',
    numeric: 'numeric',
    long: 'long',
  },
  TIMEOUT: {
    apiReset: 1000,
  },
  HEADER: {
    name: 'authorization',
    getAuthScheme: (token) => `Bearer ${token}`,
  },
  ROLE: {
    employee: 'Employee',
    manager: 'Manager',
    admin: 'Admin',
  },
  HTTP_METHOD: {
    post: 'POST',
    get: 'GET',
    put: 'PUT',
    delete: 'DELETE',
    patch: 'PATCH',
  },
  API_METHOD: {
    getNotes: 'getNotes',
    getUsers: 'getUsers',
  },
  CACHE_KEY: {
    notesList: 'notesList',
    usersList: 'usersList',
  },
  LOCAL_STORAGE: {
    persistKey: 'persist',
  },
  BUTTON_KEY: {
    newNote: 'new-note',
    newUser: 'new-user',
    user: 'user',
    notes: 'notes',
  },
};

export const TITLE = {
  placeholder: ' - ',
  PUBLIC: {
    companyName: '[Company Name]',
    companyInitials: '[CN]',
    login: 'Employee Login',
  },
  DASH: {
    welcome: 'Dashboard',
  },
  NOTE: {
    list: 'Notes List',
    new: 'Add Note',
    edit: 'Edit Note',
  },
  USER: {
    list: 'Users List',
    new: 'Add User',
    edit: 'Edit User',
  },
};

export const REGEX = {
  dash: /^\/dash(\/)?$/,
  notes: /^\/dash\/notes(\/)?$/,
  users: /^\/dash\/users(\/)?$/,
  removePeriodSpace: /\.\s/g,
  usernameCheck: /^[A-z]{3,20}$/,
  passwordCheck: /^[A-z0-9!@#$%]{4,12}$/,
};

export const INDEX = {
  emptyArrayLength: 0,
  first: 0,
};

export const SORTING = {
  ORDER: {
    ascending: 1,
    descending: -1,
    equal: 0,
  },
  DIRECTION: {
    ascending: 'ascending',
    descending: 'descending',
  },
  SYMBOL: {
    ascending: ' ▲',
    descending: ' ▼',
    reset: '✖',
  },
  TYPE: {
    user: 'user',
    note: 'note',
  },
};

export const CLASS_NAME = {
  errorMsg: 'errmsg',
  offscreen: 'offscreen',
  formInputIncomplete: 'form__input--incomplete',
  cellInactive: 'table__cell--inactive',
  containerSmall: 'dash-header__container--small',
  userEdit: 'user__edit',
};

export const REPLACEMENT = {
  emptyString: '',
  emptyArray: [],
  singleSpace: ' ',
  noteTicket: '${note.ticket}',
  comma: ',',
  commaSpace: ', ',
};

export const PATH = {
  placeholder: '/placeholder',
  root: '/',
  login: '/login',
  AUTH: {
    baseUrl: '/auth',
    refresh: '/auth/refresh',
    logout: '/auth/logout',
  },
  DASH: {
    baseUrl: '/dash',
    NOTE: {
      overview: '/dash/notes',
      new: '/dash/notes/new',
      notes: '/notes',
      noteId: (noteId) => `/dash/notes/${noteId}`,
    },
    USER: {
      overview: '/dash/users',
      new: '/dash/users/new',
      users: '/users',
      userId: (userId) => `/dash/users/${userId}`,
    },
  },
};

export const ROUTE = {
  root: '/',
  login: 'login',
  dash: 'dash',
  wildcard: '/*',
  USERS: {
    users: 'users',
    id: ':id',
    new: 'new',
  },
  NOTES: {
    notes: 'notes',
    id: ':id',
    new: 'new',
  },
};

export const HTTP_STATUS_CODES = {
  CLIENT: {
    ERROR: {
      badRequest: 400,
      unauthorized: 401,
      forbidden: 403,
      notFound: 404,
      conflict: 409,
    },
    SUCCESS: {
      ok: 200,
      created: 201,
      noContent: 204,
    },
  },
  SERVER: {
    ERROR: {
      internal: 500,
    },
  },
};

export const MSG = {
  API: {
    ERROR: {
      loginExpired: 'Your login has expired.',
    },
  },
  USER: {
    ERROR: {
      allFieldsRequired: 'All fields are required',
      fieldsRequired: 'All fields except password are required',
      unauthorized: 'Unauthorized',
      forbidden: 'Forbidden',
      notFound: 'No users found',
      duplicateUsername: 'Duplicate username',
      invalidData: 'Invalid user data received',
      idRequired: 'User ID Required',
      hasAssignedNotes: 'User has assigned notes',
      noUserFound: 'No User found!',
    },
    SUCCESS: {},
  },
  NOTE: {
    ERROR: {
      notFound: 'No notes found',
      allFieldsRequired: 'All fields are required',
      duplicateTitle: 'Duplicate note title',
      invalidData: 'Invalid note data received',
      idRequired: 'Note ID required',
      noNotesFound: 'No Notes found!',
    },
    SUCCESS: {},
  },
  SERVER: {
    noResponse: 'No Server Response',
    missingData: 'Missing Username or Password',
    unauthorized: 'Unauthorized',
    unknownError: 'Something went terribly wrong! No idea, to be honest :O',
  },
};

export const FORM_FIELDS = {
  LOGIN: {
    username: 'Username:',
    password: 'Password:',
    button: 'Sign In!',
    trustDevice: 'Remember Me!',
  },
};

export const UI = {
  PUBLIC: {
    login: 'Employee Login',
    loginAgain: 'Please login again!',
    backHome: 'Back to Home',
    noAccess: 'No access!',
    COMPANY: {
      HEADER: {
        name: '[ Company Name ]!',
        story: '[ Company Story ]: ',
        details: '[ Company Details ]: ',
      },
      INFO: {
        name: '[ Company Name ]',
        street: '[ Street ]',
        city: '[ City ]',
        phoneLink: 'tel:+431234567890',
        phoneNumber: '[ Phone Number ]',
        ownerName: '[ Owner Name ]',
      },
    },
    TEXT: {
      welcome: `Welcome to `,
      paragraphOne: `Tempor dolor nulla deserunt in dolore elit. In eu ut sunt laborum occaecat
      exercitation amet sunt ex cillum aliqua cillum mollit. Proident officia id
      laboris commodo incididunt nulla et amet. Ipsum excepteur eiusmod sint dolor
      pariatur consectetur nisi in. Nulla nulla culpa ut anim aliqua ea reprehenderit
      irure qui. Mollit consequat elit voluptate sit et elit pariatur labore occaecat.
      Duis sint dolore nulla Lorem in. Consectetur culpa ipsum enim sunt nulla
      cupidatat ad ea. Culpa id velit aliquip quis do minim aute mollit ullamco
      adipisicing officia velit.In exercitation quis dolore aliquip incididunt.
      Ullamco cupidatat elit quis amet laborum. Ipsum culpa non occaecat ullamco
      exercitation cillum eiusmod eiusmod aute ullamco mollit. Exercitation ut sint
      nulla laboris anim sit mollit eiusmod ex velit commodo et ex minim. Dolor Lorem
      est amet pariatur quis do exercitation.`,
      paragraphTwo: `Tempor dolor nulla deserunt in dolore elit. In eu ut sunt laborum occaecat
      exercitation amet sunt ex cillum aliqua cillum mollit. Proident officia id
      laboris commodo incididunt nulla et amet. Ipsum excepteur eiusmod sint dolor
      pariatur consectetur nisi in. Nulla nulla culpa ut anim aliqua ea reprehenderit
      irure qui. Mollit consequat elit voluptate sit et elit pariatur labore occaecat.
      Duis sint dolore nulla Lorem in. Consectetur culpa ipsum enim sunt nulla
      cupidatat ad ea. Culpa id velit aliquip quis do minim aute mollit ullamco
      adipisicing officia velit.In exercitation quis dolore aliquip incididunt.
      Ullamco cupidatat elit quis amet laborum. Ipsum culpa non occaecat ullamco
      exercitation cillum eiusmod eiusmod aute ullamco mollit. Exercitation ut sint
      nulla laboris anim sit mollit eiusmod ex velit commodo et ex minim. Dolor Lorem
      est amet pariatur quis do exercitation.`,
    },
  },
  DASH: {
    currentUser: 'Current User: ',
    status: 'Status: ',
    headerTitle: 'Tech Documentation',
    greeting: 'Welcome {username}!',
    templateUsername: '{username}',
    welcome: `Tempor dolor nulla deserunt in dolore elit. In eu ut sunt laborum occaecat
      exercitation amet sunt ex cillum aliqua cillum mollit. Proident officia id
      laboris commodo incididunt nulla et amet. Ipsum excepteur eiusmod sint dolor
      pariatur consectetur nisi in. Nulla nulla culpa ut anim aliqua ea reprehenderit
      irure qui. Mollit consequat elit voluptate sit et elit pariatur labore occaecat.
      Duis sint dolore nulla Lorem in. Consectetur culpa ipsum enim sunt nulla
      cupidatat ad ea. Culpa id velit aliquip quis do minim aute mollit ullamco
      adipisicing officia velit.In exercitation quis dolore aliquip incididunt.
      Ullamco cupidatat elit quis amet laborum. Ipsum culpa non occaecat ullamco
      exercitation cillum eiusmod eiusmod aute ullamco mollit. Exercitation ut sint
      nulla laboris anim sit mollit eiusmod ex velit commodo et ex minim. Dolor Lorem
      est amet pariatur quis do exercitation.`,
    welcome2: `Tempor dolor nulla deserunt in dolore elit. In eu ut sunt laborum occaecat
      exercitation amet sunt ex cillum aliqua cillum mollit. Proident officia id
      laboris commodo incididunt nulla et amet. Ipsum excepteur eiusmod sint dolor
      pariatur consectetur nisi in. Nulla nulla culpa ut anim aliqua ea reprehenderit
      irure qui. Mollit consequat elit voluptate sit et elit pariatur labore occaecat.
      Duis sint dolore nulla Lorem in. Consectetur culpa ipsum enim sunt nulla
      cupidatat ad ea. Culpa id velit aliquip quis do minim aute mollit ullamco
      adipisicing officia velit.In exercitation quis dolore aliquip incididunt.
      Ullamco cupidatat elit quis amet laborum. Ipsum culpa non occaecat ullamco
      exercitation cillum eiusmod eiusmod aute ullamco mollit. Exercitation ut sint
      nulla laboris anim sit mollit eiusmod ex velit commodo et ex minim. Dolor Lorem
      est amet pariatur quis do exercitation.`,
    welcome3: `Tempor dolor nulla deserunt in dolore elit. In eu ut sunt laborum occaecat
      exercitation amet sunt ex cillum aliqua cillum mollit. Proident officia id
      laboris commodo incididunt nulla et amet. Ipsum excepteur eiusmod sint dolor
      pariatur consectetur nisi in. Nulla nulla culpa ut anim aliqua ea reprehenderit
      irure qui. Mollit consequat elit voluptate sit et elit pariatur labore occaecat.
      Duis sint dolore nulla Lorem in. Consectetur culpa ipsum enim sunt nulla
      cupidatat ad ea. Culpa id velit aliquip quis do minim aute mollit ullamco
      adipisicing officia velit.In exercitation quis dolore aliquip incididunt.
      Ullamco cupidatat elit quis amet laborum. Ipsum culpa non occaecat ullamco
      exercitation cillum eiusmod eiusmod aute ullamco mollit. Exercitation ut sint
      nulla laboris anim sit mollit eiusmod ex velit commodo et ex minim. Dolor Lorem
      est amet pariatur quis do exercitation.`,
    LINK: {
      viewNotes: 'View Notes List',
      addNewNote: 'Add New Note',
      viewUsers: 'View Users List',
      addNewUser: 'Add New User',
    },
    NOTE: {
      LABEL: {
        ticketTitle: 'Edit Note #${note.ticket}',
        newTitle: 'New Note',
        title: 'Title:',
        text: 'Text: ',
        workComplete: 'WORK COMPLETE: ',
        assignedTo: 'ASSIGNED TO: ',
        created: 'Created: ',
        updated: 'Updated: ',
        completed: 'Completed',
        open: 'Pending',
        sortDesc: 'Sort Descending',
        sortAsc: 'Sort Ascending',
        resetSorting: 'Reset Sorting',
      },
      TABLE: {
        COL_KEY: {
          status: 'status',
          createdAt: 'createdAt',
          updatedAt: 'updatedAt',
          title: 'title',
          owner: 'user',
          edit: 'actions',
        },
        TITLE: {
          status: 'Status',
          created: 'Created',
          updated: 'Updated',
          title: 'Title',
          owner: 'Owner',
          edit: 'Actions',
        },
      },
    },
    USER: {
      LABEL: {
        username: 'Username: ',
        usernameRule: '[3-20 letters]',
        password: 'Password: ',
        passwordRule1: '[empty = no change]',
        passwordRule2: '[4-12 chars incl. !@#$%]',
        active: 'ACTIVE ',
        assignedRoles: 'ASSIGNED ROLES: ',
        userTitle: 'New User',
      },
      TABLE: {
        COL_KEY: {
          username: 'username',
          roles: 'roles',
        },
        TITLE: {
          username: 'Username',
          roles: 'Roles',
          edit: 'Action',
        },
      },
    },
  },
};
