import React from 'react';

import cls from './FooterSocial.module.scss';

import ButtonGoldBorder from 'shared/ui/ButtonGoldBorder/ButtonGoldBorder';

import Facebook from 'shared/assets/icons/Facebook.svg';
import Github from 'shared/assets/icons/Github.svg';
import Instagram from 'shared/assets/icons/Instagram.svg';
import Twitter from 'shared/assets/icons/Twitter.svg';
import Discord from 'shared/assets/icons/Discord.svg';
import Reddit from 'shared/assets/icons/Reddit.svg';
import Telegram from 'shared/assets/icons/Telegram.svg';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface FooterSocialProps {
  className?: string;
}

const FooterSocial = ({ className }: FooterSocialProps) => {
  const { t } = useTranslation('footer');
  return (
    <div className={classNames(cls.FooterSocial, {}, [className])}>
      <h5 className={cls.Title}>{t('Stay Connected')}:</h5>
      <div className={cls.Items}>
        {/* <a href='#'>
          <ButtonGoldBorder onClick={() => {}} className={cls.Link}>
            <Facebook
              className={classNames(cls.Link__pic, {}, [cls.Facebook])}
            />
          </ButtonGoldBorder>
        </a> */}
        <a
          href='https://cryptoconcierge.gitbook.io/crypto-concierge/'
          target='_blank'
        >
          <ButtonGoldBorder onClick={() => {}} className={cls.Link}>
            <Github className={classNames(cls.Link__pic, {}, [cls.Github])} />
          </ButtonGoldBorder>
        </a>
        <a href='https://www.instagram.com/crypto__concierge/' target='_blank'>
          <ButtonGoldBorder onClick={() => {}} className={cls.Link}>
            <Instagram
              className={classNames(cls.Link__pic, {}, [cls.Instagram])}
            />
          </ButtonGoldBorder>
        </a>
        <a href='https://twitter.com/C_Concierge' target='_blank'>
          <ButtonGoldBorder onClick={() => {}} className={cls.Link}>
            <Twitter className={classNames(cls.Link__pic, {}, [cls.Twitter])} />
          </ButtonGoldBorder>
        </a>
        {/* <a href='#'>
          {' '}
          <ButtonGoldBorder onClick={() => {}} className={cls.Link}>
            <Discord className={classNames(cls.Link__pic, {}, [cls.Discord])} />
          </ButtonGoldBorder>
        </a> */}
        {/* <a href='#'>
          <ButtonGoldBorder onClick={() => {}} className={cls.Link}>
            <Reddit className={classNames(cls.Link__pic, {}, [cls.Reddit])} />
          </ButtonGoldBorder>
        </a> */}
        <a href='https://t.me/cconcierge' target='_blank'>
          <ButtonGoldBorder onClick={() => {}} className={cls.Link}>
            <Telegram
              className={classNames(cls.Link__pic, {}, [cls.Telegram])}
            />
          </ButtonGoldBorder>
        </a>
      </div>
    </div>
  );
};

export default FooterSocial;
