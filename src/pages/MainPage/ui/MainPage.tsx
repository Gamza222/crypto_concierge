import React, { useContext } from 'react';

import cls from './MainPage.module.scss';
import Curve from 'shared/assets/icons/curve.svg';

import MainPageSection1 from './MainPageSection1/MainPageSection1';
import MainPageSection2 from './MainPageSection2/MainPageSection2';
import MainPageSection3 from './MainPageSection3/MainPageSection3';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DimensionsContext } from 'app/providers/DimensionProvider/DimensionsProvider';
import MainPageSection4 from './MainPageSection4/MainPageSection4';
import { Footer } from 'widgets/Footer';
import FooterMobile from 'widgets/Footer/ui/FooterMobile/FooterMobile';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  const { t } = useTranslation();
  const { width, height } = useContext(DimensionsContext);

  return (
    <>
      <Curve className={cls.curve} />
      <section className={classNames(cls.MainPage, {}, [className])}>
        <MainPageSection1 />
        <MainPageSection2 />
        <MainPageSection3 />
        <MainPageSection4 />
        {width > 1200 ? <Footer /> : <FooterMobile />}
      </section>
    </>
  );
};

export default MainPage;
