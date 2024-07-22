/**
 * @constant
 * @description Defines various MongoDB event types.
 */
export const MONGO_EVENTS = {
  OPEN: 'open',
  ERROR: 'error',
  DISCONNECTED: 'disconnected',
  RECONNECTED: 'reconnected',
};

/**
 * @constant
 * @description Contains index-related constants.
 */
export const INDEX = {
  NOT_FOUND: -1,
  START: 1,
};

/**
 * @constant
 * @description Names for different cookies.
 */
export const COOKIE_NAME = {
  JWT: 'jwt',
};

/**
 * @constant
 * @description Configuration options for cookies.
 */
export const COOKIE_OPTIONS = {
  JWT: {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
  CLEAR_JWT: {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
  },
};

/**
 * @constant
 * @description Supported content types.
 */
export const CONTENT_TYPES = {
  HTML: 'html',
  JSON: 'json',
  TEXT: 'txt',
};

/**
 * @constant
 * @description Defines various application routes.
 */
export const ROUTE = {
  SERVER: {
    ROOT: '/',
    AUTH: '/auth',
    USERS: '/users',
    NOTES: '/notes',
    WILDCARD: '*',
  },
  AUTH: {
    ROOT: '/',
    REFRESH: '/refresh',
    LOGOUT: '/logout',
  },
  NOTE: {
    ROOT: '/',
  },
  USER: {
    ROOT: '/',
  },
};

/**
 * @constant
 * @description Configuration settings for the application.
 */
export const CONFIG = {
  PORT: process.env.PORT || 3500,
  NODE_ENV: 'production',
  HTTP_LOCALHOST: process.env.HTTP_LOCALHOST,
  ALLOWED_ORIGINS: {
    DELIMITER: ',',
  },
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
    MONGO_ERROR: 'mongoErrLog.log',
  },
  PATH: {
    LOGS_DIR: ['..', '..', 'logs'],
    VIEWS_DIR: ['..', '..', 'views'],
    PUBLIC_DIR: ['..', '..', 'public'],
    FRONTEND_DIR: ['..', '..', 'frontend', 'dist'],
    INDEX_HTML: 'index.html',
    ERROR_HTML: '404.html',
  },
  DATE_SETTING: {
    FORMAT: 'ddMMyyyy\tHH:mm:ss',
  },
  RATE_LIMIT: {
    LOGIN_RATE: 60 * 1000,
    LOGIN_MAX_ATTEMPTS: 5,
  },
  BEARER: {
    PREFIX: 'Bearer ',
  },
  AUTH_HEADER: {
    SEPARATOR: ' ',
  },
};

/**
 * @constant
 * @description HTTP status codes.
 */
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

/**
 * @constant
 * @description Various message templates for the application.
 */
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
  SECURITY: {
    ERROR: {
      UNAUTHORIZED: 'Unauthorized',
      FORBIDDEN: 'Forbidden',
    },
  },
  SERVER: {
    LOG: {
      START: (PORT, LOCAL_URL) => `
    ========================================
    🚀 Connected to MongoDB!
    ----------------------------------------
    🌐 Server running on port ${PORT}.
    
    🔗 Visit: ${LOCAL_URL}
    ========================================
`,
      DISCONNECTED: `
    ========================================
    ❌ MongoDB Disconnected!
    ========================================
`,
      RECONNECTED: `
    ========================================
    🔄 MongoDB Reconnected!
    ========================================
`,
    },
    NOT_FOUND: '404 Not found',
  },
};
