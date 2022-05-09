import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import store from '@/store';
import '@/global.less';
import { ErrorBoundary, ErrorFallback } from '@/components';

const container = document.getElementById('root') as
  | Element
  | DocumentFragment;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
