export const CONFIG = {
  CREDENTIALS: 'include' /* !important: always send cookie */,
  HEADER: {
    NAME: 'authorization',
    getAuthScheme: (token) => `Bearer ${token}`,
  },
  TAG_TYPES: ['Note', 'User'],
};

export const ROUTE = {
  PLACEHOLDER: '/placeholder',
  AUTH: {
    REFRESH: '/auth/refresh',
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
