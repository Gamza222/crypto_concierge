import React from 'react';

import cls from './MainPage.module.scss';
import Curve from 'shared/assets/icons/curve.svg';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import useWindowDimensions from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions';
import MainPageSection1 from './MainPageSection1/MainPageSection1';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  const { t } = useTranslation();
  const { width, height } = useWindowDimensions();

  return (
    <>
      <Curve className={cls.curve} />
      <div className={classNames(cls.MainPage, {}, [className])}>
        <MainPageSection1 />
      </div>
    </>
  );
};

export default MainPage;
