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
    <div className={classNames(cls.MainPageSection1Text, {}, [])}>
      <h3 className={cls.MainPageSection1Text__white}>
        {t('Header1')}
        <br />
        {t('Header2')}
        <br />
      </h3>
      <div className={cls.MainPageSection1Text__gold}>
        <h1>
          {t('HeaderMain')}
          <span>.</span>
        </h1>
      </div>
      <h3 className={cls.MainPageSection1Text__white}>
        {t('Header3')}
        <br />
        {t('Header4')}
      </h3>
    </div>
  );
};

export default MainPageSection1Text;
