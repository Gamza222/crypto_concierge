import React, { Suspense, useMemo } from 'react';

import useWindowDimensions from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions';
import Corder from 'shared/assets/icons/corner.svg';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/Router';
import { Navbar, NavbarMobile } from 'widgets/Navbar';
import { DimensionsContext } from './providers/DimensionProvider/DimensionsProvider';

interface AppProps {
  className?: string;
}

const App = ({ className }: AppProps) => {
  const { width, height } = useWindowDimensions();

  const dimensionsProps = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height],
  );

  return (
    <DimensionsContext.Provider value={dimensionsProps}>
      <div className={classNames('app', {}, [])}>
        <Corder className='corner' />
        {width > 1200 ? <Navbar /> : <NavbarMobile />}

        <div className='content-page'>
          <AppRouter />
        </div>
      </div>
    </DimensionsContext.Provider>
  );
};

export default App;
