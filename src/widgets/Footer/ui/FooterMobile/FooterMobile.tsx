import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FooterMobile.module.scss';
import FooterSocial from '../FooterSocial/FooterSocial';
import FooterNav from '../FooterNav/FooterNav';
import FooterButtons from '../FooterButtons/FooterButtons';
import Logo from 'shared/assets/icons/Logo.svg';

interface FooterMobileProps {
  className?: string;
}

const FooterMobile = ({ className }: FooterMobileProps) => {
  return (
    <div className={classNames(cls.FooterMobile, {}, [className])}>
      <div className={cls.FooterMobile__content}>
        <FooterSocial className={cls.FooterSocial} />
        <FooterNav className={cls.FooterNav} />
        <FooterButtons className={cls.FooterButtons} />
        <div className={cls.Logo}>
          <Logo className={cls.Logo__pic} />
          <h2 className={cls.Logo__title}>
            Crypto<span>concierge</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
