import React, { memo, useRef, useState } from 'react';
import cls from './NavbarMobileOpened.module.scss';

import Back from 'shared/assets/icons/Back.svg';
import NavbarItem from '../../NavbarItem/NavbarItem';

import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { NavbarItemListMobile } from 'widgets/Navbar/model/items';
import { useClickOutside } from 'shared/lib/hooks/useClickOutside/useClickOutside';

interface NavbarMobileOpenedProps {
  className?: string;
  closeNavbar: () => void;
}

const NavbarMobileOpened = memo(
  ({ className, closeNavbar }: NavbarMobileOpenedProps) => {
    const [closing, setClosing] = useState<boolean>(false);
    const duration = 0.2;

    const onCloseNavbar = () => {
      setClosing(true);
      setTimeout(() => {
        closeNavbar();
      }, (duration + 0.1) * 1000);
    };

    const navbarRef = useRef<HTMLDivElement>(null);
    const mods: Mods = {
      [cls.closing]: closing,
    };
    const modsOverlay: Mods = {
      [cls.closingOverlay]: closing,
    };

    useClickOutside(navbarRef, onCloseNavbar);

    return (
      <>
        <div className={classNames(cls.blackOverlay, { ...modsOverlay }, [])} />
        <div
          className={classNames(cls.NavbarMobileOpened, { ...mods }, [
            className,
          ])}
          ref={navbarRef}
        >
          <div className={cls.Header}>
            <button className={cls.Back} onClick={onCloseNavbar}>
              <Back className={cls.Back__pic} />
            </button>
          </div>
          <nav className={cls.Items}>
            {NavbarItemListMobile.map((item, key) => {
              return (
                <NavbarItem
                  item={item}
                  key={key}
                  callback={onCloseNavbar}
                  mobile
                />
              );
            })}
          </nav>
        </div>
      </>
    );
  },
);

export default NavbarMobileOpened;
