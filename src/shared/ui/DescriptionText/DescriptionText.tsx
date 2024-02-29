import React, { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DescriptionText.module.scss';

interface DescriptionTextProps {
  className?: string;
  children?: ReactNode | undefined;
}

const DescriptionText = ({ className, children }: DescriptionTextProps) => {
  return (
    <p className={classNames(cls.DescriptionText, {}, [className])}>
      {children}
    </p>
  );
};

export default DescriptionText;
