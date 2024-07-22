import { store } from '../../../app/store.js';
import { CONFIG } from '../../../config/constants.js';
import { notesApiSlice } from '../../notes/api/notesApiSlice.js';
import { usersApiSlice } from '../../users/api/usersApiSlice.js';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

/**
 * @function Prefetch
 * @description Component to prefetch data when mounted.
 */
function Prefetch() {
  useEffect(() => {
    /**
     * @function store.dispatch
     * @description Dispatches a prefetch action for notes data.
     */
    store.dispatch(
      notesApiSlice.util.prefetch(
        CONFIG.API_METHOD.getNotes,
        CONFIG.CACHE_KEY.notesList,
        {
          force: true,
        }
      )
    );

    /**
     * @function store.dispatch
     * @description Dispatches a prefetch action for users data.
     */
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
