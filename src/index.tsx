import React, { Suspense } from 'react';

import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';

import { render } from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

import App from 'app/App';
import { Loader } from 'widgets/Loader';

render(
  <Suspense
    fallback={
      // <PageLoader />
      <Loader className='main-loader' />
    }
  >
    <HashRouter>
      <StoreProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StoreProvider>
    </HashRouter>
  </Suspense>,
  document.getElementById('root'),
);
//BrowserRouter
