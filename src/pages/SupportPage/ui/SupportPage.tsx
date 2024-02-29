import React, { useContext } from 'react';

import cls from './SupportPage.module.scss';
import FooterMobile from 'widgets/Footer/ui/FooterMobile/FooterMobile';
import SupportPageContent from './SupportPageContent/SupportPageContent';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DimensionsContext } from 'app/providers/DimensionProvider/DimensionsProvider';
import { Footer } from 'widgets/Footer';

interface SupportPageProps {
  className?: string;
}

const SupportPage = ({ className }: SupportPageProps) => {
  const { t } = useTranslation('support_page');
  const { width, height } = useContext(DimensionsContext);
  return (
    <div className={classNames(cls.SupportPage, {}, [className])}>
      <SupportPageContent />
      {width > 1200 ? <Footer /> : <FooterMobile />}
    </div>
  );
};

export default SupportPage;
