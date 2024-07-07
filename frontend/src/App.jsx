import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Public from './components/Public';
import DashLayout from './components/Dash/DashLayout';

import Login from './features/auth/Login';
import Welcome from './features/auth/Welcome';
import NotesList from './features/notes/NotesList';
import UsersList from './features/users/UsersList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />

        {/* Start Protected Routes */}
        <Route path='dash' element={<DashLayout />}>
          <Route index element={<Welcome />} />

          <Route path='notes'>
            <Route index element={<NotesList />} />
          </Route>

          <Route path='users'>
            <Route index element={<UsersList />} />
          </Route>
        </Route>
        {/* End Protected Routes */}
      </Route>
    </Routes>
  );
}

export default App;
