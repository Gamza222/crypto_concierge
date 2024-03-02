import React, { memo, useContext, useEffect, useState } from 'react';
import cls from './Navbar.module.scss';

import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import Logo from 'shared/assets/icons/Logo.svg';
import NavbarItem from '../NavbarItem/NavbarItem';
import ButtonGold from 'shared/ui/ButtonGold/ButtonGold';

import { NavbarItemList } from '../../model/items';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { motion } from 'framer-motion';
import { useWindowScrollPosition } from 'shared/lib/hooks/useWindowScrollPosition/useWindowScrollPosition';
import usePreviousValue from 'shared/lib/hooks/usePreviousValue/usePreviousValue';
import { DimensionsContext } from 'app/providers/DimensionProvider/DimensionsProvider';

interface NavbarProps {
  className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const { width, height, appRect } = useContext(DimensionsContext);

  const scrollHeight = 55;
  const [navbarHide, setNavbarHide] = useState(false);

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
  }, [scrollPos, height, appRect?.height]);

  const getBlurred = () => {
    if (scrollPos > scrollHeight) {
      return true;
    }
    return false;
  };
  const mods: Mods = {
    [cls.blurred]: getBlurred(),
    [cls.hidden]: navbarHide,
  };
  return (
    <motion.div
      className={classNames(cls.Navbar, { ...mods }, [className])}
      initial='hidden'
      animate={navbarHide ? hidden2 : visible}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{
        hidden,
        visible,
      }}
    >
      <Link to={RoutePath.main} className={cls.Logo}>
        <Logo className={cls.Logo__pic} />
        <h2 className={cls.Logo__title}>Cryptoconcierge</h2>
      </Link>
      <nav className={cls.Menu}>
        {NavbarItemList.map((item, key) => {
          return <NavbarItem item={item} key={key} />;
        })}
      </nav>
      <a href='#' className={cls.LaunchBtn}>
        <ButtonGold>{t('launch app')}</ButtonGold>
      </a>
    </motion.div>
  );
});

export default Navbar;
