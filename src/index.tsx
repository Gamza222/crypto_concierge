import React, { Suspense } from 'react';

import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

import App from 'app/App';

render(
  <Suspense
    fallback={
      // <PageLoader />
      <p>Loading...</p>
    }
  >
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root'),
);
