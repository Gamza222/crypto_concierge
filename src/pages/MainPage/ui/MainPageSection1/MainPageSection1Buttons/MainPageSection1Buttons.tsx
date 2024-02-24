import React from 'react';
import cls from './MainPageSection1Buttons.module.scss';
import PhonePic from 'shared/assets/icons/phone.svg';
import PCPic from 'shared/assets/icons/computer.svg';

import useWindowDimensions from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions';
import ButtonGoldBorder from 'shared/ui/ButtonGoldBorder/ButtonGoldBorder';
import ButtonGold from 'shared/ui/ButtonGold/ButtonGold';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface MainPageSection1ButtonProps {
  className?: string;
}

const MainPageSection1Buttons = ({
  className,
}: MainPageSection1ButtonProps) => {
  const { t } = useTranslation();
  const { width, height } = useWindowDimensions();

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
          <ButtonGoldBorder
            title={t('Launch')}
            text={t('Web App')}
            Pic={PCPic}
            onClick={() => {}}
          />
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
