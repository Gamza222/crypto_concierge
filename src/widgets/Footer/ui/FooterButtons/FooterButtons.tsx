import React from 'react';

import cls from './FooterButtons.module.scss';
import ButtonGold from 'shared/ui/ButtonGold/ButtonGold';
import Apple from 'shared/assets/icons/Apple.svg';
import Playmarket from 'shared/assets/icons/Playmarket.svg';
import Android from 'shared/assets/icons/Android.svg';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface FooterButtonsProps {
  className?: string;
}

const FooterButtons = ({ className }: FooterButtonsProps) => {
  const { t } = useTranslation('footer');
  return (
    <div className={classNames(cls.FooterButtons, {}, [className])}>
      <h5 className={cls.Title}>{t('Download CRYPTO-CONCIERGE ')}</h5>
      <div className={cls.Buttons}>
        <ButtonGold className={cls.Button}>
          <Apple className={cls.Apple} />
          <p className={cls.Button__text}>{t('Download for IOS')}</p>
        </ButtonGold>
        <ButtonGold className={cls.Button}>
          <Playmarket className={cls.Playmarket} />
          <p className={cls.Button__text}>{t('Download for Android')}</p>
        </ButtonGold>
        <ButtonGold className={cls.Button}>
          <Android className={cls.Anroid} />
          <p className={cls.Button__text}>{t('Download APK')}</p>
        </ButtonGold>
      </div>
    </div>
  );
};

export default FooterButtons;
