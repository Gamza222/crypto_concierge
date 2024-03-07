import React, { useContext } from 'react';
import cls from './MainPageSection1.module.scss';

import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import MainPageSection1Text from './MainPageSection1Text/MainPageSection1Text';
import MainPageSection1Buttons from './MainPageSection1Buttons/MainPageSection1Buttons';
import Pers from 'shared/assets/icons/Concierge2-min.png';

import { DimensionsContext } from 'app/providers/DimensionProvider/DimensionsProvider';
import { AnimationBox } from 'entities/AnimationBox';

interface MainPageSection1Props {
  className?: string;
}

const MainPageSection1 = ({ className }: MainPageSection1Props) => {
  const { t } = useTranslation();

  const visible = { opacity: 1, y: 0, transition: { duration: 0.8 } };
  const { width, height } = useContext(DimensionsContext);

  const animationPicVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const picMods: Mods = {};
  const textMods: Mods = {
    [cls.shadowedText]: (width < 1200 && width < height) || height > 2500,
  };
  return (
    <div className={classNames(cls.MainPageSection1, {}, [className])}>
      <motion.div
        initial='hidden'
        animate='visible'
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className={classNames(
          cls.MainPageSection1__content,
          { ...textMods },
          [],
        )}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible,
          }}
        >
          <MainPageSection1Text className={cls.MainPageSection1Text} />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible,
          }}
        >
          <div className={cls.description}>
            <h4 className={cls.description__item}>
              {t('Explore the crypto world without any issues')}
              <br />
              {t('with Crypto Concierge')}
            </h4>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible,
          }}
        >
          <MainPageSection1Buttons />
        </motion.div>
      </motion.div>
      <div className={classNames(cls.PicContainer, { ...picMods }, [])}>
        <AnimationBox
          className={classNames(cls.PicContainer__content, { ...picMods }, [])}
          visiblePart={0}
          variants={animationPicVariants}
          exitAnimation={false}
        >
          <img
            src={Pers}
            alt='persona'
            className={cls.PicContainer__content__pic}
          />
        </AnimationBox>
      </div>
    </div>
  );
};

export default MainPageSection1;
