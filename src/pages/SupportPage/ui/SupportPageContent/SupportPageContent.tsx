import React from 'react';
import cls from './SupportPageContent.module.scss';
import Title from 'shared/ui/Title/Title';

import Facebook from 'shared/assets/icons/Facebook.svg';
import Instagram from 'shared/assets/icons/Instagram.svg';
import Twitter from 'shared/assets/icons/Twitter.svg';
import Discord from 'shared/assets/icons/Discord.svg';
import Telegram from 'shared/assets/icons/Telegram.svg';

import ButtonGold from 'shared/ui/ButtonGold/ButtonGold';

import { classNames } from 'shared/lib/classNames/classNames';
import { AnimationBox } from 'entities/AnimationBox';
import { useTranslation } from 'react-i18next';

interface SupportPageContentProps {
  className?: string;
}

const SupportPageContent = ({ className }: SupportPageContentProps) => {
  const { t } = useTranslation('support_page');

  const animationWalletContentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <AnimationBox
      visiblePart={0}
      variants={animationWalletContentVariants}
      exitAnimation={false}
      className={classNames(cls.StayContentPageContent, {}, [className])}
    >
      <div className={cls.StayContentPageContent__content}>
        <Title className={cls.Title}>{t('Stay connected')}:</Title>
        <div className={cls.Links}>
          <a href='#'>
            <ButtonGold className={cls.Button}>
              <Facebook className={cls.Button__FacebookPic} />
            </ButtonGold>
          </a>
          <a href='#'>
            <ButtonGold className={cls.Button}>
              <Instagram className={cls.Button__InstagramPic} />
            </ButtonGold>
          </a>
          <a href='#'>
            <ButtonGold className={cls.Button}>
              <Twitter className={cls.Button__Twitter} />
            </ButtonGold>
          </a>
          <a href='#'>
            <ButtonGold className={cls.Button}>
              <Discord className={cls.Button__Discord} />
            </ButtonGold>
          </a>
          <a href='#'>
            <ButtonGold className={cls.Button}>
              <Telegram className={cls.Button__Telegram} />
            </ButtonGold>
          </a>
        </div>
      </div>
    </AnimationBox>
  );
};

export default SupportPageContent;
