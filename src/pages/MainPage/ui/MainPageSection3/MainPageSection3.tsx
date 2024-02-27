import React, { useCallback, useState } from 'react';
import cls from './MainPageSection3.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import Title from 'shared/ui/Title/Title';
import { ContentBox } from 'entities/ContentBox';
import TextBox from 'shared/ui/TextBox/TextBox';
import { learnData } from 'pages/MainPage/data/data';
import { AnimationBox } from 'entities/AnimationBox';

interface MainPageSection3Props {
  className?: string;
}

const MainPageSection3 = ({ className }: MainPageSection3Props) => {
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
      className={classNames(cls.MainPageSection3, {}, [className])}
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
        <Title className={cls.Title}>{t('Learn more')}</Title>
      </AnimationBox>
      <AnimationBox
        visiblePart={0}
        variants={animationContentBoxVariants}
        exitAnimation={exitAnimation}
      >
        <ContentBox className={cls.ContentBox}>
          {learnData.map((data, key) => {
            return (
              <AnimationBox
                visiblePart={400}
                variants={animationTextVariants}
                exitAnimation={exitAnimation}
                className={classNames(cls.Item, {
                  [cls.ItemLeft]: key % 2 === 0,
                })}
              >
                <div className={cls.Item__pic}></div>
                <TextBox
                  title={data.title}
                  descr={data.descr}
                  key={key}
                  className={cls.Item__title}
                />
              </AnimationBox>
            );
          })}
        </ContentBox>
      </AnimationBox>
    </AnimationBox>
  );
};

export default MainPageSection3;
