import React, { useState } from 'react';
import cls from './NavbarMobileOpened.module.scss';

import Back from 'shared/assets/icons/Back.svg';

import { classNames } from 'shared/lib/classNames/classNames';
import { motion } from 'framer-motion';
import { NavbarItemListMobile } from 'widgets/Navbar/model/items';
import NavbarItem from '../../NavbarItem/NavbarItem';

interface NavbarMobileOpenedProps {
  className?: string;
  closeNavbar: () => void;
}

const NavbarMobileOpened = ({
  className,
  closeNavbar,
}: NavbarMobileOpenedProps) => {
  const [closing, setClosing] = useState<boolean>(false);
  const duration = 0.2;
  const hidden = { opacity: 0, x: '100%' };
  const visible = { opacity: 1, x: 0, transition: { duration: duration } };

  const onCloseNavbar = () => {
    setClosing(true);
    setTimeout(() => {
      closeNavbar();
    }, duration * 1000);
  };
  return (
    <motion.div
      className={classNames(cls.NavbarMobileOpened, {}, [className])}
      initial={'hidden'}
      animate={closing ? 'hidden' : 'visible'}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{
        hidden,
        visible,
      }}
    >
      <div className={cls.Header}>
        <button className={cls.Back} onClick={onCloseNavbar}>
          <Back className={cls.Back__pic} />
        </button>
      </div>
      <nav className={cls.Items}>
        {NavbarItemListMobile.map((item, key) => {
          return (
            <NavbarItem item={item} key={key} callback={onCloseNavbar} mobile />
          );
        })}
      </nav>
    </motion.div>
  );
};

export default NavbarMobileOpened;
