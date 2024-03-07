import React, { memo, useCallback, useState } from 'react';
import cls from './MainPageSection2.module.scss';

import Title from 'shared/ui/Title/Title';
import Pers from 'shared/assets/icons/Concierge2-min.png';

import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { optionsData } from 'pages/MainPage/data/data';
import { PicBox } from 'entities/PicBox';
import { AnimationBox } from 'entities/AnimationBox';

interface MainPageSection2Props {
  className?: string;
}

const MainPageSection2 = memo(({ className }: MainPageSection2Props) => {
  const { t } = useTranslation();
  const [exitAnimation, setExitAnimation] = useState(false);
  const [exitAnimationText, setExitAnimationText] = useState(false);

  const animationTextVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const animationBoxVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const mods: Mods = {
    [cls.animateLine]: !exitAnimation,
  };

  const setterExitAnimation = useCallback((value: boolean) => {
    setExitAnimation(value);
  }, []);

  return (
    <AnimationBox
      className={classNames(cls.MainPageSection2, { ...mods }, [className])}
      visiblePart={10}
      variants={{}}
      exitAnimation={exitAnimation}
      setExit={setterExitAnimation}
    >
      <AnimationBox
        className={cls.titleBox}
        visiblePart={300}
        variants={animationTextVariants}
        exitAnimation={exitAnimationText}
        setExit={setExitAnimationText}
      >
        <Title className={cls.Title}>{t('One platform, many solutions')}</Title>
      </AnimationBox>
      <div className={cls.Boxes}>
        {optionsData.map((option, key) => {
          return (
            <AnimationBox
              visiblePart={400}
              variants={animationBoxVariants}
              exitAnimation={exitAnimationText}
              key={key}
            >
              <PicBox
                key={key}
                title={option.title}
                description={option.description}
                Pic={option.Pic}
              />
            </AnimationBox>
          );
        })}
        <div className={cls.Pers}>
          <img src={Pers} alt='persona' className={cls.Pers__pic} />
        </div>
      </div>
    </AnimationBox>
  );
});

export default MainPageSection2;
