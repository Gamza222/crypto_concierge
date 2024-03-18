import React, { useContext } from 'react';
import cls from './MainPageSection1Buttons.module.scss';

import PhonePic from 'shared/assets/icons/phone.svg';
import PCPic from 'shared/assets/icons/computer.svg';
import ButtonGoldBorder from 'shared/ui/ButtonGoldBorder/ButtonGoldBorder';
import ButtonGold from 'shared/ui/ButtonGold/ButtonGold';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DimensionsContext } from 'app/providers/DimensionProvider/DimensionsProvider';

interface MainPageSection1ButtonProps {
  className?: string;
}

const MainPageSection1Buttons = ({
  className,
}: MainPageSection1ButtonProps) => {
  const { t } = useTranslation();
  const { width, height } = useContext(DimensionsContext);

  return (
    <div className={classNames(cls.MainPageSection1Buttons, {}, [])}>
      {width > 1200 ? (
        <div className={cls.buttons}>
          <ButtonGoldBorder
            title={t('Download')}
            text={t('Mobile App')}
            Pic={PhonePic}
            onClick={() => {}}
          />
          <a
            href='https://app.crypto-concierge.com'
            target='_blank'
            className={cls.Link}
          >
            <ButtonGoldBorder
              title={t('Launch')}
              text={t('Web App')}
              Pic={PCPic}
              onClick={() => {}}
            />
          </a>
        </div>
      ) : (
        <ButtonGold className={cls.DownloadBtnMobile} onClick={() => {}}>
          {t('Download mobile app')}
        </ButtonGold>
      )}
    </div>
  );
};

export default MainPageSection1Buttons;
