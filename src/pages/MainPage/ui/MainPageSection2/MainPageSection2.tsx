import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import cls from './MainPageSection2.module.scss';

import Title from 'shared/ui/Title/Title';
import useWindowDimensions from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions';

import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useElementRect } from 'shared/lib/hooks/useElementRect/useElementRect';
import { useWindowScrollPosition } from 'shared/lib/hooks/useWindowScrollPosition/useWindowScrollPosition';
import { useCalculateAnimation } from 'shared/lib/hooks/useCalculateAnimation/useCalculateAnimation';
import { optionsData } from 'pages/MainPage/data/data';
import { PicBox } from 'entities/PicBox';

interface MainPageSection2Props {
  className?: string;
}

const MainPageSection2 = memo(({ className }: MainPageSection2Props) => {
  const { t } = useTranslation();

  const scrollPos = useWindowScrollPosition();
  const { width, height } = useWindowDimensions();

  const mainRef = useRef<HTMLDivElement | null>(null);
  const mainRect = useElementRect(mainRef);

  const calculateAnimationTitle = useCalculateAnimation(
    400,
    Number(mainRect?.top),
    Number(mainRect?.bottom),
    height,
    Number(mainRect?.height),
  );

  const animationTextVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const mods: Mods = {
    [cls.animateLine]: calculateAnimationTitle,
  };

  const exitBoxesAnimation = useCallback(() => {
    if (!calculateAnimationTitle || Number(mainRect?.bottom) < 0) {
      return true;
    }
    return false;
  }, [calculateAnimationTitle, mainRect?.bottom]);

  return (
    <div
      className={classNames(cls.MainPageSection2, { ...mods }, [className])}
      ref={mainRef}
    >
      <motion.div
        initial='hidden'
        animate={calculateAnimationTitle ? 'visible' : 'hidden'}
        exit={'hidden'}
        variants={animationTextVariants}
        className={cls.titleBox}
      >
        <Title className={cls.Title}>{t('One platform, many solutions')}</Title>
      </motion.div>
      <div
        className={cls.Boxes}
        // initial='hidden'
        // animate='visible'
        // exit={{ opacity: 0, transition: { duration: 1 } }}
        // variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {optionsData.map((option, key) => {
          return (
            <PicBox
              key={key}
              title={option.title}
              description={option.description}
              Pic={option.Pic}
              exitAnimation={exitBoxesAnimation}
            />
          );
        })}
      </div>
    </div>
  );
});

export default MainPageSection2;
