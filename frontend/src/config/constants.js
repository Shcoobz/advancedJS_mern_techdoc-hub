export const CONFIG = {
  credentials: 'include' /* !important: always send cookie */,
  tagTypes: ['Note', 'User'],
  TAG_TYPE: {
    NOTE: {
      type: 'Note',
      id: 'LIST',
    },
  },
  SLICE: {
    name: 'auth',
  },
  NODE: {
    env: 'development',
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
    Employee: 'Employee',
    Manager: 'Manager',
    Admin: 'Admin',
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
};

export const LOADER_COLOR = '#FFF';

export const REGEX = {
  dash: /^\/dash(\/)?$/,
  notes: /^\/dash\/notes(\/)?$/,
  users: /^\/dash\/users(\/)?$/,
  removePeriodSpace: /\.\s/g,
};

export const INDEX = {
  emptyArrayLength: 0,
  first: 0,
};

export const CLASS_NAME = {
  errorMsg: 'errmsg',
  offscreen: 'offscreen',
  formInputIncomplete: 'form__input--incomplete',
};

export const REPLACEMENT = {
  emptyString: '',
  singleSpace: ' ',
  noteTicket: '${note.ticket}',
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
    },
    USER: {
      overview: '/dash/users',
      new: '/dash/users/new',
    },
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
      },
      TABLE: {
        status: 'Status',
        created: 'Created',
        updated: 'Updated',
        title: 'Title',
        owner: 'Owner',
        actions: 'Actions',
      },
    },
  },
};
