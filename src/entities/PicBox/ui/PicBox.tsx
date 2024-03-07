import React, { useEffect, useRef } from 'react';
import cls from './PicBox.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useElementRect } from 'shared/lib/hooks/useElementRect/useElementRect';

export interface PicBoxData {
  Pic: React.VFC<React.SVGProps<SVGSVGElement>> | null;
  title: string;
  description: string;
}

interface PicBoxProps extends PicBoxData {
  className?: string;
}

const PicBox = ({ className, title, description, Pic }: PicBoxProps) => {
  const { t } = useTranslation();
  const boxRef = useRef<HTMLDivElement>(null);
  const boxRect = useElementRect(boxRef);

  useEffect(() => {
    const handleWindowMouseMove = (event: MouseEvent) => {
      if (boxRect && boxRef.current) {
        let x = event.clientX - boxRect?.left;
        let y = event.clientY - boxRect?.top;
        boxRef.current.style.setProperty('--x', x + 'px');
        boxRef.current.style.setProperty('--y', y + 'px');
      }
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, [boxRect, boxRef]);
  return (
    <div className={classNames(cls.PicBox, {}, [className])}>
      <div className={cls.Content} ref={boxRef}>
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
