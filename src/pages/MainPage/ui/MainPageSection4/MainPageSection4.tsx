import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPageSection4.module.scss';
import Title from 'shared/ui/Title/Title';
import PhonePic from 'shared/assets/icons/phone.svg';
import PCPic from 'shared/assets/icons/computer.svg';

import ButtonGold from 'shared/ui/ButtonGold/ButtonGold';

import { useTranslation } from 'react-i18next';
import { AnimationBox } from 'entities/AnimationBox';

interface MainPageSection4Props {
  className?: string;
}

const MainPageSection4 = ({ className }: MainPageSection4Props) => {
  const { t } = useTranslation();
  const [exitAnimation, setExitAnimation] = useState(false);

  const setterExitAnimation = useCallback((value: boolean) => {
    setExitAnimation(value);
  }, []);

  const animationTextVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };
  const animationContentBoxVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };
  return (
    <AnimationBox
      className={classNames(cls.MainPageSection4, {}, [className])}
      visiblePart={400}
      variants={{}}
      exitAnimation={exitAnimation}
      setExit={setterExitAnimation}
    >
      <AnimationBox
        className={cls.titleBox}
        visiblePart={400}
        variants={animationTextVariants}
        exitAnimation={exitAnimation}
      >
        <Title className={cls.Title}>
          {t('Make it easier with Crypto Concierge')}
        </Title>
      </AnimationBox>
      <AnimationBox
        className={cls.buttons}
        visiblePart={400}
        variants={animationTextVariants}
        exitAnimation={exitAnimation}
      >
        <ButtonGold onClick={() => {}} className={cls.Button}>
          <PhonePic className={cls.Button__pic} />
          <div className={cls.Button__text}>
            <p className={cls.Button__text__title}>{t('Download')}</p>
            <p className={cls.Button__text__info}>{t('Mobile App')}</p>
          </div>
        </ButtonGold>
        <ButtonGold onClick={() => {}} className={cls.Button}>
          <PCPic className={cls.Button__pic} />
          <div className={cls.Button__text}>
            <p className={cls.Button__text__title}>{t('Launch')}</p>
            <p className={cls.Button__text__info}>{t('Web App')}</p>
          </div>
        </ButtonGold>
      </AnimationBox>
    </AnimationBox>
  );
};

export default MainPageSection4;
