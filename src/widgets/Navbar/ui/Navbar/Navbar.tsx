import React, { memo } from 'react';
import cls from './Navbar.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import Logo from 'shared/assets/icons/Logo.svg';
import NavbarItem from '../NavbarItem/NavbarItem';
import ButtonGold from 'shared/ui/ButtonGold/ButtonGold';

import { NavbarItemList } from '../../model/items';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { motion } from 'framer-motion';

interface NavbarProps {
  className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const hidden = { opacity: 0, y: -20 };
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
  return (
    <motion.div
      className={classNames(cls.Navbar, {}, [className])}
      initial='hidden'
      animate='visible'
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
