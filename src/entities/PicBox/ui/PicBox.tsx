import React from 'react';
import cls from './PicBox.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

export interface PicBoxData {
  Pic: React.VFC<React.SVGProps<SVGSVGElement>> | null;
  title: string;
  description: string;
}

interface PicBoxProps extends PicBoxData {
  className?: string;
  exitAnimation: boolean;
}

const PicBox = ({ className, title, description, Pic }: PicBoxProps) => {
  const { t } = useTranslation();

  return (
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
  );
};

export default PicBox;
