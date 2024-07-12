export const CONFIG = {
  TOKEN: {
    ACCESS: { EXPIRES_IN: '15m' },
    REFRESH: { EXPIRES_IN: '7d' },
    BEARER: { PREFIX: 'Bearer ' },
  },
  LOCALE_SETTINGS: {
    DEFAULT_LOCALE: 'de_AT',
    DEFAULT_STRENGTH: 2,
  },
  BCRYPT: {
    SALT_ROUNDS: 10,
  },
  LOG_FILES: {
    ERROR: 'errLog.log',
    REQUEST: 'reqLog.log',
  },
  PATH: {
    LOGS_DIR: ['..', '..', 'logs'],
  },
  DATE_SETTING: {
    FORMAT: 'ddMMyyyy\tHH:mm:ss',
  },
  RATE_LIMIT: {
    LOGIN_RATE: 60 * 1000,
    LOGIN_MAX_ATTEMPTS: 5,
  },
};

// TODO: find better name
export const CONSTANTS = {
  NOT_FOUND: -1,
};

export const COOKIE_NAME = {
  JWT: 'jwt',
};

export const COOKIE_OPTIONS = {
  JWT: {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 7 * 24 * 60 * 60 * 1000 /**TODO: make into constant */,
  },
  CLEAR_JWT: {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
  },
};

export const CONTENT_TYPES = {
  HTML: 'html',
  JSON: 'json',
  TEXT: 'txt',
};

export const HTTP_STATUS_CODES = {
  CLIENT: {
    ERROR: {
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
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
  AUTH: {
    ERROR: {
      ALL_FIELDS_REQUIRED: 'All fields are required',
      UNAUTHORIZED: 'Unauthorized',
      FORBIDDEN: 'Forbidden',
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
    SUCCESS: {
      CREATED: (username) => `New user ${username} created`,
      UPDATED: (username) => `${username} updated`,
      DELETED: (username, userId) => `Username ${username} with ID ${userId} deleted`,
    },
  },
  NOTE: {
    ERROR: {
      NOT_FOUND: 'No notes found',
      ALL_FIELDS_REQUIRED: 'All fields are required',
      DUPLICATE_TITLE: 'Duplicate note title',
      INVALID_DATA: 'Invalid note data received',
      ID_REQUIRED: 'Note ID required',
    },
    SUCCESS: {
      UPDATED: (title) => `'${title}' updated`,
      DELETED: (title, id) => `Note '${title}' with ID ${id} deleted`,
      NEW_NOTE_CREATED: 'New note created',
    },
  },
  LOG: {
    ERROR: {
      TOO_MANY_ATTEMPTS:
        'Too many login attempts from this IP, please try again after a 60 second pause',
      TOO_MANY_REQUESTS: (options, req) =>
        `Too Many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    },
  },
  CORS: {
    ERROR: 'Not allowed by CORS',
  },
  COOKIE: {
    CLEARED: 'Cookie cleared',
  },
  ERROR: {
    PAGE_NOT_FOUND: '404 Not Found',
    RESOURCE_NOT_EXIST:
      '<h1>Sorry!</h1><p>The resource you have requested does not exist.</p>',
  },
};
