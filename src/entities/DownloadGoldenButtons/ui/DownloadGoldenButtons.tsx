import React from 'react';

import cls from './DownloadGoldenButtons.module.scss';

import ButtonGold from 'shared/ui/ButtonGold/ButtonGold';
import PhonePic from 'shared/assets/icons/phone.svg';
import PCPic from 'shared/assets/icons/computer.svg';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface DownloadGoldenButtonsProps {
  className?: string;
}

const DownloadGoldenButtons = ({ className }: DownloadGoldenButtonsProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.DownloadGoldenButtons, {}, [className])}>
      <ButtonGold onClick={() => {}} className={cls.Button}>
        <PhonePic className={cls.Button__pic} />
        <div className={cls.Button__text}>
          <p className={cls.Button__text__title}>{t('Download')}</p>
          <p className={cls.Button__text__info}>{t('Mobile App')}</p>
        </div>
      </ButtonGold>
      <a href='https://app.crypto-concierge.com' target='_blank'>
        <ButtonGold onClick={() => {}} className={cls.Button}>
          <PCPic className={cls.Button__pic} />
          <div className={cls.Button__text}>
            <p className={cls.Button__text__title}>{t('Launch')}</p>
            <p className={cls.Button__text__info}>{t('Web App')}</p>
          </div>
        </ButtonGold>
      </a>
    </div>
  );
};

export default DownloadGoldenButtons;
