import React from 'react';
import cls from './MainPageSection1.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import MainPageSection1Text from './MainPageSection1Text/MainPageSection1Text';
import MainPageSection1Buttons from './MainPageSection1Buttons/MainPageSection1Buttons';

interface MainPageSection1Props {
  className?: string;
}

const MainPageSection1 = ({ className }: MainPageSection1Props) => {
  const { t } = useTranslation();

  const visible = { opacity: 1, y: 0, transition: { duration: 0.8 } };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible,
  };
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      className={classNames(cls.MainPageSection1, {}, [className])}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible,
        }}
      >
        <MainPageSection1Text />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible,
        }}
      >
        <div className={cls.description}>
          <h4 className={cls.description__item}>
            {t(
              'Explore the crypto world without any issues with Crypto Concierge',
            )}
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
  );
};

export default MainPageSection1;
