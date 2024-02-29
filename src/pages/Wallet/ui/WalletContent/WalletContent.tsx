import React from 'react';

import cls from './WalletContent.module.scss';
import Title from 'shared/ui/Title/Title';
import DescriptionText from 'shared/ui/DescriptionText/DescriptionText';

import { classNames } from 'shared/lib/classNames/classNames';

import { DownloadGoldenButtons } from 'entities/DownloadGoldenButtons';
import { AnimationBox } from 'entities/AnimationBox';
import { useTranslation } from 'react-i18next';

interface WalletContentProps {
  className?: string;
}

const WalletContent = ({ className }: WalletContentProps) => {
  const { t } = useTranslation('wallet');

  const animationWalletContentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <AnimationBox
      className={classNames(cls.WalletContent, {}, [className])}
      visiblePart={0}
      variants={animationWalletContentVariants}
      exitAnimation={false}
    >
      <div className={cls.WalletContent__content}>
        <Title className={cls.Title}>{t('title')}</Title>
        <div className={cls.Text}>
          <DescriptionText className={cls.Text__item}>
            {t('description1')}
          </DescriptionText>
          <DescriptionText className={cls.Text__item}>
            {t('description2')}
          </DescriptionText>
          <DescriptionText className={cls.Text__item}>
            {t('description3')}
          </DescriptionText>
        </div>
        <DownloadGoldenButtons />
      </div>
    </AnimationBox>
  );
};

export default WalletContent;
