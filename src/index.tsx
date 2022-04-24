import './global.less';

import React from 'react';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
// @ts-ignore
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
