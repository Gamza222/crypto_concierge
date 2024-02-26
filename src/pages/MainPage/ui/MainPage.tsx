import React from 'react';

import cls from './MainPage.module.scss';
import Curve from 'shared/assets/icons/curve.svg';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import useWindowDimensions from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions';
import MainPageSection1 from './MainPageSection1/MainPageSection1';
import { Loader } from 'widgets/Loader';
import MainPageSection2 from './MainPageSection2/MainPageSection2';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  const { t } = useTranslation();
  const { width, height } = useWindowDimensions();

  return (
    <>
      <Curve className={cls.curve} />
      <section className={classNames(cls.MainPage, {}, [className])}>
        <MainPageSection1 />
        <MainPageSection2 />
      </section>
    </>
  );
};

export default MainPage;
