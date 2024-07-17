import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Public from './components/Public';
import DashLayout from './components/Dash/DashLayout';

import Login from './features/auth/components/Login.jsx';
import Welcome from './features/auth/components/Welcome.jsx';
import NotesList from './features/notes/components/NotesList/NotesList.jsx';
import UsersList from './features/users/components/UsersList/UsersList.jsx';
import EditUser from './features/users/components/EditUser/EditUser.jsx';
import NewUserForm from './features/users/components/NewUser/NewUserForm.jsx';
import EditNote from './features/notes/components/EditNote/EditNote.jsx';
import NewNote from './features/notes/components/NewNote/NewNote.jsx';
import Prefetch from './features/auth/utils/Prefetch';
import PersistLogin from './features/auth/state/PersistLogin.jsx';
import RequireAuth from './features/auth/components/RequireAuth';
import useTitle from './hooks/useTitle';
import { CONFIG } from './config/constants.js';

function App() {
  useTitle('[Company Name]');

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />

        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[...Object.values(CONFIG.ROLE)]} />}>
            <Route element={<Prefetch />}>
              <Route path='dash' element={<DashLayout />}>
                <Route index element={<Welcome />} />

                <Route
                  element={
                    <RequireAuth
                      allowedRoles={[CONFIG.ROLE.Manager, CONFIG.ROLE.Admin]}
                    />
                  }>
                  <Route path='users'>
                    <Route index element={<UsersList />} />
                    <Route path=':id' element={<EditUser />} />
                    <Route path='new' element={<NewUserForm />} />
                  </Route>
                </Route>

                <Route path='notes'>
                  <Route index element={<NotesList />} />
                  <Route path=':id' element={<EditNote />} />
                  <Route path='new' element={<NewNote />} />
                </Route>
              </Route>
              {/* End Dash */}
            </Route>
          </Route>
        </Route>
        {/* End Protected Routes */}
      </Route>
    </Routes>
  );
}

export default App;
