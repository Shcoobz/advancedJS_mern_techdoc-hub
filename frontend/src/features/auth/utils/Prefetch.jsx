import { store } from '../../../app/store.js';
import { CONFIG } from '../../../config/constants.js';
import { notesApiSlice } from '../../notes/api/notesApiSlice.js';
import { usersApiSlice } from '../../users/usersApiSlice.js';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function Prefetch() {
  useEffect(() => {
    store.dispatch(
      notesApiSlice.util.prefetch(
        CONFIG.API_METHOD.getNotes,
        CONFIG.CACHE_KEY.notesList,
        {
          force: true,
        }
      )
    );
    store.dispatch(
      usersApiSlice.util.prefetch(
        CONFIG.API_METHOD.getUsers,
        CONFIG.CACHE_KEY.usersList,
        {
          force: true,
        }
      )
    );
  }, []);

  return <Outlet />;
}

export default Prefetch;
