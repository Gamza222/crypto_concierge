import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPageSection1Text.module.scss';
import { useTranslation } from 'react-i18next';

interface MainPageSection1TextProps {
  className?: string;
}

const MainPageSection1Text = ({ className }: MainPageSection1TextProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.MainPageSection1Text, {}, [className])}>
      <h3 className={cls.MainPageSection1Text__white}>
        {t('Header1')}
        <br />
        {t('Header2')}
        <br />
        {t('Header3')}
        <br />
        {t('Header4')}
        <br />
        {t('Header5')}
        <br />
        {t('Header6')}
        <br />
        {t('Header7')}
      </h3>
      <div className={cls.MainPageSection1Text__gold}>
        <h1>
          {t('HeaderMain1')}
          <br /> {t('HeaderMain2')}
          <span>.</span>
        </h1>
      </div>
      <h3 className={cls.MainPageSection1Text__white}>
        {t('Header8')}
        <br />
        {t('Header9')}
        <br />
        {t('Header10')}
        <br />
        {t('Header11')}
        <br />
        {t('Header12')}
        <br />
        {t('Header13')}
      </h3>
    </div>
  );
};

export default MainPageSection1Text;
