import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'widgets/Loader';
// import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          element={
            <Suspense
              fallback={
                // <PageLoader />
                <Loader className='main-loader' />
              }
            >
              <div className='page-wrapper'>{element}</div>
            </Suspense>
          }
          path={path}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
