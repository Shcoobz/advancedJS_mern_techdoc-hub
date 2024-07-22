# advancedJS_mern_TechDoc - Hub

![advancedJS_mern_TechDoc - Hub](frontend/public/img/advancedJS_mern_techdoc-hub.png)

<br>

## Live Demo

You can access the live demo of **TechDoc - Hub** using the following credentials:

<blockquote>

#### Manager:

- **Username**: Manager
- **Password**: 123456

#### Employee:

- **Username**: Employee
- **Password**: 123456

</blockquote>

<br>

## Summary

**TechDoc - Hub** provides a robust platform for managing users and notes, featuring secure authentication, comprehensive data management, and a user-friendly interface.

<blockquote>

#### Backend:

The core functionality includes:

- User authentication (login, logout, refresh tokens)
- CRUD operations for notes
- Secure cookie management
- Role-based access control
- Comprehensive error handling and logging

</blockquote>

<blockquote>

#### Frontend:

The core functionality includes:

- User Management: Create, update, and manage user details.
- Notes Management: Add, edit, and organize notes with various statuses.
- Role-Based Access: Restrict access to certain features based on user roles.
- Dynamic Data Sorting: Sort and filter data in tables based on user input.

</blockquote>

<br>

## Features

<blockquote>

#### User Authentication:

Handles user login, logout, and token refresh functionalities. Ensures secure access and management of user sessions with JWT tokens.

</blockquote>

<blockquote>

#### Note Management:

Enables CRUD operations for notes, including creating, reading, updating, and deleting notes. Notes are associated with users and enriched with user details.

</blockquote>

<blockquote>

#### Role-Based Access Control:

Implements access control based on user roles, ensuring that only authorized users can access certain endpoints and functionalities.

</blockquote>

<blockquote>

#### Secure Cookie Management:

Manages cookies securely, including setting and clearing JWT tokens. Ensures cookies are handled with appropriate security settings like httpOnly, secure, and sameSite attributes.

</blockquote>

<blockquote>

#### Comprehensive Error Handling:

Provides robust error handling mechanisms, logging errors to designated files and sending appropriate error responses to clients.

</blockquote>

<blockquote>

#### Logging:

Logs important events, such as HTTP requests and MongoDB events, to files. Ensures that the application behavior can be monitored and debugged effectively.

</blockquote>

<blockquote>

#### User Management - Frontend:

Manage user information including roles and credentials. Users can be added, edited, or removed with ease. Role-based access control ensures that only authorized users can perform certain actions.

</blockquote>

<blockquote>

#### Notes Management - Frontend:

Create, edit, and organize notes. The application allows users to manage notes with different statuses and dates, providing a comprehensive view of their tasks and projects.

</blockquote>

<blockquote>

#### Authentication and Authorization - Frontend:

Secure login and role-based authorization mechanisms ensure that users can only access features and data that they are permitted to. Includes token-based authentication and session management.

</blockquote>

<blockquote>

#### Dynamic Sorting and Filtering - Frontend:

Sort and filter data dynamically in tables based on user preferences. The application supports various sorting directions and can reset sorting configurations as needed.

</blockquote>

## Technologies

<blockquote>

#### Backend:

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing user and note data.
- **Mongoose**: ODM for interacting with MongoDB.
- **JSON Web Tokens (JWT)**: For secure user authentication.
- **Bcrypt**: For hashing passwords.
- **Express-Rate-Limit**: To handle rate limiting.
- **Date-fns**: For date formatting.
- **UUID**: For generating unique identifiers.

</blockquote>

<blockquote>

#### Frontend:

- **React**: A JavaScript library for building user interfaces. Used for creating dynamic and responsive UI components.
- **Redux**: A state management library for JavaScript apps. Manages application state in a predictable manner.
- **React Router**: A routing library for React applications. Handles navigation and routing within the application.
- **RTK Query**: A data fetching and caching tool that simplifies data management in Redux.
- **JWT (JSON Web Tokens)**: Used for authentication and authorization processes.
- **CSS Modules**: Scoped CSS for styling React components, ensuring modular and maintainable styles.

</blockquote>

---

_Note: This document provides an overview of **advancedJS_mern_TechDoc - Hub**. For detailed instructions and more information, please refer to the source code documentation._
