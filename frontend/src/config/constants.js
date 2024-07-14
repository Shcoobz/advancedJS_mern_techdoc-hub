export const CONFIG = {
  CREDENTIALS: 'include' /* !important: always send cookie */,
  HEADER: {
    name: 'authorization',
    getAuthScheme: (token) => `Bearer ${token}`,
  },
  TAG_TYPES: ['Note', 'User'],
  ROLES: {
    Employee: 'Employee',
    Manager: 'Manager',
    Admin: 'Admin',
  },
};

export const LOADER_COLOR = '#FFF';

export const REGEX = {
  dash: /^\/dash(\/)?$/,
  notes: /^\/dash\/notes(\/)?$/,
  users: /^\/dash\/users(\/)?$/,
};

export const CLASS_NAME = {
  ErrorMsg: 'errmsg',
  offscreen: 'offscreen',
};

export const PATH = {
  PLACEHOLDER: '/placeholder',
  ROOT: '/',
  LOGIN: '/login',
  AUTH: {
    REFRESH: '/auth/refresh',
  },
  DASH: {
    ROOT: '/dash',
  },
  NOTE: {},
  USER: {},
};

export const HTTP_STATUS_CODES = {
  CLIENT: {
    ERROR: {
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
      NOT_FOUND: 404,
      CONFLICT: 409,
    },
    SUCCESS: {
      OK: 200,
      CREATED: 201,
      NO_CONTENT: 204,
    },
  },
  SERVER: {
    ERROR: {
      INTERNAL: 500,
    },
  },
};

export const MSG = {
  API: {
    ERROR: {
      LOGIN_EXPIRED: 'Your login has expired.',
    },
  },
  USER: {
    ERROR: {
      ALL_FIELDS_REQUIRED: 'All fields are required',
      FIELDS_REQUIRED: 'All fields except password are required',
      UNAUTHORIZED: 'Unauthorized',
      FORBIDDEN: 'Forbidden',
      NOT_FOUND: 'No users found',
      DUPLICATE_USERNAME: 'Duplicate username',
      INVALID_DATA: 'Invalid user data received',
      ID_REQUIRED: 'User ID Required',
      HAS_ASSIGNED_NOTES: 'User has assigned notes',
    },
    SUCCESS: {},
  },
  NOTE: {
    ERROR: {
      NOT_FOUND: 'No notes found',
      ALL_FIELDS_REQUIRED: 'All fields are required',
      DUPLICATE_TITLE: 'Duplicate note title',
      INVALID_DATA: 'Invalid note data received',
      ID_REQUIRED: 'Note ID required',
    },
    SUCCESS: {},
  },
  SERVER: {},
};

export const UI = {
  PUBLIC: {
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
    LOGIN: 'Employee Login',
  },
  DASH: {
    currentUser: 'Current User: ',
    status: 'Status: ',
    headerTitle: 'Tech Documentation',
  },
};
