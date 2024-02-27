import React, { ReactNode } from 'react';

import cls from './ContentBox.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface ContentBoxProps {
  className?: string;
  children: ReactNode | undefined;
}

const ContentBox = ({ className, children }: ContentBoxProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ContentBox, {}, [className])}>
      <div className={cls.Content}>{children}</div>
    </div>
  );
};

export default ContentBox;
