import { store } from '../../../app/store.js';
import { notesApiSlice } from '../../notes/api/notesApiSlice.js';
import { usersApiSlice } from '../../users/usersApiSlice.js';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function Prefetch() {
  useEffect(() => {
    store.dispatch(notesApiSlice.util.prefetch('getNotes', 'notesList', { force: true }));
    store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', { force: true }));
  }, []);

  return <Outlet />;
}

export default Prefetch;
