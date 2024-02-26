import React, { useEffect, useRef, useState } from 'react';
import cls from './PicBox.module.scss';

import useWindowDimensions from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useCalculateAnimation } from 'shared/lib/hooks/useCalculateAnimation/useCalculateAnimation';
import { useElementRect } from 'shared/lib/hooks/useElementRect/useElementRect';
import { motion } from 'framer-motion';

export interface PicBoxData {
  Pic: React.VFC<React.SVGProps<SVGSVGElement>> | null;
  title: string;
  description: string;
}

interface PicBoxProps extends PicBoxData {
  className?: string;
  exitAnimation: () => boolean;
}

const PicBox = ({
  className,
  title,
  description,
  Pic,
  exitAnimation,
}: PicBoxProps) => {
  const { t } = useTranslation();

  const { width, height } = useWindowDimensions();

  const [visible, setVisible] = useState<boolean>(false);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const boxRect = useElementRect(boxRef);

  const calculateAnimationBox = useCalculateAnimation(
    400,
    Number(boxRect?.top),
    Number(boxRect?.bottom),
    height,
    Number(boxRect?.height),
  );

  const animationBoxVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    calculateAnimationBox && setVisible(true);
  }, [calculateAnimationBox]);

  useEffect(() => {
    const exit = exitAnimation();
    if (exit) {
      setVisible(false);
    }
  }, [exitAnimation]);
  return (
    <motion.div
      initial='hidden'
      animate={visible ? 'visible' : 'hidden'}
      exit={'hidden'}
      variants={animationBoxVariants}
      className={cls.animation}
      ref={boxRef}
    >
      <div className={classNames(cls.PicBox, {}, [className])}>
        <div className={cls.Content}>
          {Pic && (
            <div className={cls.Icon}>
              <Pic />
            </div>
          )}
          <div className={cls.Info}>
            <h6 className={cls.Info__title}>{t(title)}</h6>
            <p className={cls.Info__descr}>{t(description)}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PicBox;
