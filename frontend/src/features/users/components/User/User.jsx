import { memo } from 'react';
import UserComponent from './UserComponent';

/**
 * @function User
 * @description Memoized wrapper for `UserComponent` to optimize performance by preventing unnecessary re-renders.
 */
const User = memo(UserComponent);

export default User;
