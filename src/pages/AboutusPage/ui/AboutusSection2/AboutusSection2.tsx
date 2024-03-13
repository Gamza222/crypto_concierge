import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AboutusSection2.module.scss';
import Title from 'shared/ui/Title/Title';
import { useTranslation } from 'react-i18next';
import CirclePic from 'shared/ui/CirclePic/CirclePic';
import { AnimationBox } from 'entities/AnimationBox';

interface AboutusSection2Props {
  className?: string;
  exitAnimation?: boolean;
}

const AboutusSection2 = ({
  className,
  exitAnimation,
}: AboutusSection2Props) => {
  const { t } = useTranslation('aboutus');
  const animationCircleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };
  const animationSection1Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { staggerChildren: 0.8 } },
  };

  return (
    <div className={classNames(cls.AboutusSection2, {}, [])}>
      <Title>{t('Team')}</Title>
      <AnimationBox
        className={cls.AboutusSection2__content}
        visiblePart={0}
        variants={animationSection1Variants}
        exitAnimation={exitAnimation || false}
      >
        <AnimationBox
          visiblePart={90}
          variants={animationCircleVariants}
          exitAnimation={exitAnimation || false}
        >
          <CirclePic />
        </AnimationBox>
        <AnimationBox
          visiblePart={90}
          variants={animationCircleVariants}
          exitAnimation={exitAnimation || false}
        >
          <CirclePic />
        </AnimationBox>
        <AnimationBox
          visiblePart={90}
          variants={animationCircleVariants}
          exitAnimation={exitAnimation || false}
        >
          <CirclePic />
        </AnimationBox>
        <AnimationBox
          visiblePart={90}
          variants={animationCircleVariants}
          exitAnimation={exitAnimation || false}
        >
          <CirclePic />
        </AnimationBox>
      </AnimationBox>
    </div>
  );
};

export default AboutusSection2;
