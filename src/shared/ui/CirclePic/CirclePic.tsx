import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CirclePic.module.scss';

interface CirclePicProps {
  className?: string;
  Pic?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const CirclePic = ({ className, Pic }: CirclePicProps) => {
  return (
    <div className={classNames(cls.CirclePic, {}, [className])}>
      <div className={cls.CirclePic__content}>
        {Pic && <Pic className={cls.pic} />}
      </div>
    </div>
  );
};

export default CirclePic;
