import React, { useEffect, useRef } from 'react';
import cls from './PicBox.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useElementRect } from 'shared/lib/hooks/useElementRect/useElementRect';

export interface PicBoxData {
  Pic: string;
  PicWidth?: string;
  PicHeight?: string;
  title: string;
  description: string;
}

interface PicBoxProps extends PicBoxData {
  className?: string;
}

const PicBox = ({
  className,
  title,
  description,
  Pic,
  PicWidth,
  PicHeight,
}: PicBoxProps) => {
  const { t } = useTranslation();
  const boxRef = useRef<any>(null);
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

  const picStyles: React.CSSProperties = {
    width: PicWidth || '',
    height: PicHeight || '',
  };
  return (
    <button className={cls.PicBoxWrapper} ref={boxRef}>
      {Pic && <img className={cls.Icon} src={Pic} style={picStyles} />}

      <div className={classNames(cls.PicBox, {}, [className])}>
        <div className={cls.Content}>
          <div className={cls.Info}>
            <h6 className={cls.Info__title}>{t(title)}</h6>
            <p className={cls.Info__descr}>{t(description)}</p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default PicBox;
