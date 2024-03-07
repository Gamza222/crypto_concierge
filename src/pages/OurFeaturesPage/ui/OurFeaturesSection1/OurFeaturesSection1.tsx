import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './OurFeaturesSection1.module.scss';
import { AnimationBox } from 'entities/AnimationBox';
import { useTranslation } from 'react-i18next';
import { PicBox } from 'entities/PicBox';
import { FeaturesOptionsData } from 'pages/OurFeaturesPage/data/features';
import Title from 'shared/ui/Title/Title';

interface OurFeaturesSection1Props {
  className?: string;
}

const OurFeaturesSection1 = ({ className }: OurFeaturesSection1Props) => {
  const { t } = useTranslation('our_features');
  const [exitAnimation, setExitAnimation] = useState(false);
  const animationOurFeaturesSection1Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <AnimationBox
      className={classNames(cls.OurFeaturesSection1, {}, [className])}
      visiblePart={0}
      variants={animationOurFeaturesSection1Variants}
      exitAnimation={false}
    >
      <Title>{t('Our Features')}</Title>
      <AnimationBox
        exitAnimation={false}
        visiblePart={0}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className={cls.OurFeaturesSection1__boxes}
        setExit={setExitAnimation}
        show
      >
        {FeaturesOptionsData.map((feature, key) => {
          return (
            <AnimationBox
              visiblePart={300}
              variants={animationOurFeaturesSection1Variants}
              exitAnimation={exitAnimation}
              key={key}
            >
              <PicBox
                className={cls.Box}
                Pic={feature.Pic}
                title={feature.title}
                description={feature.description}
              />
            </AnimationBox>
          );
        })}
      </AnimationBox>
    </AnimationBox>
  );
};

export default OurFeaturesSection1;
