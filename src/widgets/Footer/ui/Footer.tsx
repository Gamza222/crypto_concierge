import React from 'react';

import cls from './Footer.module.scss';
import Logo from 'shared/assets/icons/Logo.svg';

import { classNames } from 'shared/lib/classNames/classNames';
import FooterNav from './FooterNav/FooterNav';
import FooterButtons from './FooterButtons/FooterButtons';
import FooterSocial from './FooterSocial/FooterSocial';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <div className={classNames(cls.Footer, {}, [])}>
      <div className={cls.Logo}>
        <Logo className={cls.Logo__pic} />
        <h2 className={cls.Logo__title}>Cryptoconcierge</h2>
      </div>
      <div className={cls.Right}>
        <FooterNav />
        <div className={cls.Right__bottom}>
          <FooterButtons />
          <FooterSocial />
        </div>
      </div>
    </div>
  );
};

export default Footer;
