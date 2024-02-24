import React, { createContext, memo, useCallback, useState } from 'react';
import cls from './NavbarMobile.module.scss';

import Switch from 'shared/assets/icons/Switch.svg';
import Logo from 'shared/assets/icons/Logo.svg';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import NavbarMobileOpened from './NavbarMobileOpened/NavbarMobileOpened';

interface NavbarMobileProps {
  className?: string;
}

const NavbarMobile = memo(({ className }: NavbarMobileProps) => {
  const { t } = useTranslation();
  const [opened, setOpened] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  const mobileNavbarContext = createContext<boolean>(false);

  const closeNavbar = useCallback(() => {
    setOpened(false);
  }, [opened, setOpened]);
  const openNavbar = useCallback(() => {
    setOpened(!opened);
  }, [opened, setOpened]);

  const finishAnimation = useCallback(() => {
    setLoaded(true);
  }, [loaded, setLoaded]);

  const hidden = { opacity: 0, y: -20 };
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  return (
    <mobileNavbarContext.Provider value={opened}>
      <motion.div
        className={classNames(cls.NavbarMobile, {}, [className])}
        initial={loaded ? false : 'hidden'}
        animate='visible'
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{
          hidden,
          visible,
        }}
        onAnimationComplete={finishAnimation}
      >
        <Link to={RoutePath.main} className={cls.Logo}>
          <Logo className={cls.Logo__pic} />
        </Link>
        <button className={cls.MenuBtn} onClick={openNavbar}>
          <Switch className={cls.MenuBtn__content} />
        </button>
      </motion.div>
      {opened && <NavbarMobileOpened closeNavbar={closeNavbar} />}
    </mobileNavbarContext.Provider>
  );
});

export default NavbarMobile;
