import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AboutusSection1.module.scss';
import Title from 'shared/ui/Title/Title';
import { useTranslation } from 'react-i18next';
import DescriptionText from 'shared/ui/DescriptionText/DescriptionText';

interface AboutusSection1Props {
  className?: string;
}

const AboutusSection1 = ({ className }: AboutusSection1Props) => {
  const { t } = useTranslation('aboutus');
  return (
    <div className={classNames(cls.AboutusSection1, {}, [className])}>
      <Title>{t('We provide high')}</Title>
      <DescriptionText className={cls.AboutusSection1__text}>
        {t('section1_descr')}
      </DescriptionText>
    </div>
  );
};

export default AboutusSection1;
