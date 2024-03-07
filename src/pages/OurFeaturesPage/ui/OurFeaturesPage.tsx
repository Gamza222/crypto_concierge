import React, { useContext } from 'react';

import cls from './OurFeaturesPage.module.scss';
import FooterMobile from 'widgets/Footer/ui/FooterMobile/FooterMobile';
import OurFeaturesSection1 from './OurFeaturesSection1/OurFeaturesSection1';

import { classNames } from 'shared/lib/classNames/classNames';
import { DimensionsContext } from 'app/providers/DimensionProvider/DimensionsProvider';
import { Footer } from 'widgets/Footer';

interface OurFeaturesPageProps {
  className?: string;
}

const OurFeaturesPage = ({ className }: OurFeaturesPageProps) => {
  const { width, height } = useContext(DimensionsContext);

  return (
    <div className={classNames(cls.OurFeaturesPage, {}, [])}>
      <OurFeaturesSection1 />
      {width > 1200 ? <Footer /> : <FooterMobile />}
    </div>
  );
};

export default OurFeaturesPage;
