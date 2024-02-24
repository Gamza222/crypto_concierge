import React, { Suspense } from 'react';

import useWindowDimensions from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions';
import Corder from 'shared/assets/icons/corner.svg';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/Router';
import { Navbar, NavbarMobile } from 'widgets/Navbar';

interface AppProps {
  className?: string;
}

const App = ({ className }: AppProps) => {
  const { width, height } = useWindowDimensions();
  return (
    <div className={classNames('app', {}, [])}>
      <Corder className='corner' />
      {width > 1200 ? <Navbar /> : <NavbarMobile />}

      <div className='content-page'>
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
