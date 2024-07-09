import { store } from '../../app/store';
import { notesApiSlice } from '../notes/notesApiSlice';
import { usersApiSlice } from '../users/usersApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function Prefetch() {
  useEffect(() => {
    console.log('Prefetch: subscribing');
    const notes = store.dispatch(notesApiSlice.endpoints.getNotes.initiate());
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

    return function cleanup() {
      console.log('Prefetch: unsubscribing');
      notes.unsubscribe();
      users.unsubscribe();
    };
  }, []);

  return <Outlet />;
}

export default Prefetch;
