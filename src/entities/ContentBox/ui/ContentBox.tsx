import React, { ReactNode, useEffect, useRef } from 'react';

import cls from './ContentBox.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useElementRect } from 'shared/lib/hooks/useElementRect/useElementRect';

interface ContentBoxProps {
  className?: string;
  children: ReactNode | undefined;
}

const ContentBox = ({ className, children }: ContentBoxProps) => {
  const { t } = useTranslation();
  const boxRef = useRef<HTMLDivElement>(null);
  const boxRect = useElementRect(boxRef);

  return (
    <div className={classNames(cls.ContentBox, {}, [className])}>
      <div className={cls.Content} ref={boxRef}>
        {children}
      </div>
    </div>
  );
};

export default ContentBox;
