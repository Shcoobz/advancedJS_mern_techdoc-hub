import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { CONFIG, ROUTE } from './config/constants';

import App from './App';
import './index.css';

if (import.meta.env.VITE_NODE_ENV === CONFIG.NODE.production) disableReactDevTools();

/**
 * @function Root
 * @desc Renders the main application with React Router and Redux provider.
 */
const root = ReactDOM.createRoot(document.getElementById(CONFIG.root));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE.wildcard} element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
