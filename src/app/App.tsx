import React, { useMemo, useRef } from 'react';

import useWindowDimensions from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions';
import Corder from 'shared/assets/icons/corner.svg';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/Router';
import { Navbar, NavbarMobile } from 'widgets/Navbar';
import { DimensionsContext } from './providers/DimensionProvider/DimensionsProvider';
import { useElementRect } from 'shared/lib/hooks/useElementRect/useElementRect';

interface AppProps {
  className?: string;
}

const App = ({ className }: AppProps) => {
  const appRef = useRef(null);
  const appRect = useElementRect(appRef);
  const { width, height } = useWindowDimensions();

  const dimensionsProps = useMemo(
    () => ({
      width,
      height,
      appRect,
    }),
    [width, height, appRect],
  );

  return (
    <DimensionsContext.Provider value={dimensionsProps}>
      <div className={classNames('app', {}, [])} ref={appRef}>
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
