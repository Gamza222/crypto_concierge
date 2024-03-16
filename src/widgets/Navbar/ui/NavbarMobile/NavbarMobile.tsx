import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import cls from './NavbarMobile.module.scss';

import Switch from 'shared/assets/icons/Switch.svg';
import Logo from 'shared/assets/icons/Logo.svg';
import usePreviousValue from 'shared/lib/hooks/usePreviousValue/usePreviousValue';
import NavbarMobileOpened from './NavbarMobileOpened/NavbarMobileOpened';

import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useWindowScrollPosition } from 'shared/lib/hooks/useWindowScrollPosition/useWindowScrollPosition';
import { DimensionsContext } from 'app/providers/DimensionProvider/DimensionsProvider';

interface NavbarMobileProps {
  className?: string;
}

const NavbarMobile = memo(({ className }: NavbarMobileProps) => {
  const { t } = useTranslation();
  const scrollHeight = 50;
  const [navbarHide, setNavbarHide] = useState(false);
  const [opened, setOpened] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const { width, height, appRect } = useContext(DimensionsContext);

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
  const hidden2 = { opacity: 0, y: -20, transition: { duration: 0.2 } };
  const visible = { opacity: 1, y: 0, transition: { duration: 0.3 } };

  const scrollPos = useWindowScrollPosition();
  const prevScrollPos = usePreviousValue(scrollPos);

  useEffect(() => {
    if (prevScrollPos) {
      scrollPos > scrollHeight &&
      prevScrollPos > scrollPos &&
      prevScrollPos + height < appRect?.height!
        ? setNavbarHide(true)
        : setNavbarHide(false);
    }
  }, [scrollPos]);
  const getBlurred = () => {
    if (scrollPos > scrollHeight) {
      return true;
    }
    return false;
  };

  const mods: Mods = {
    [cls.blurred]: getBlurred(),
  };
  return (
    <>
      <motion.div
        className={classNames(cls.NavbarMobile, { ...mods }, [className])}
        initial={loaded ? false : 'hidden'}
        animate={navbarHide ? hidden2 : visible}
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
    </>
  );
});

export default NavbarMobile;
