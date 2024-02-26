import React from 'react';
import cls from './NavbarItem.module.scss';

import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Link, useLocation } from 'react-router-dom';
import { NabvarItemType } from 'widgets/Navbar/model/items';
import { useTranslation } from 'react-i18next';

interface NavbarItemProps {
  className?: string;
  item: NabvarItemType;
  mobile?: boolean;
  callback?: () => void;
}

const NavbarItem = ({ className, item, mobile, callback }: NavbarItemProps) => {
  const { t } = useTranslation();
  const location = useLocation();

  const clicked =
    `${location.pathname}` == `/${item.path !== '/' ? item.path : ''}`;

  const mods: Mods = {
    [cls.mobile]: mobile,
    [cls.clicked]: clicked,
  };

  return (
    <Link
      className={classNames(cls.NavbarItem, { ...mods }, [className])}
      to={item.path}
      onClick={callback}
    >
      <p className={cls.NavbarItem__text}>{t(item.text)}</p>
    </Link>
  );
};

export default NavbarItem;
