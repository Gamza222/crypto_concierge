import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./CirclePic.module.scss";

interface CirclePicProps {
  className?: string;
  pic?: string;
  name: string;
  text: string;
  text2: string;
  picClass?: string;
}

const CirclePic = ({
  className,
  pic,
  name,
  text,
  text2,
  picClass,
}: CirclePicProps) => {
  return (
    <div className={cls.Card}>
      <div className={cls.Card__content}>
        <div className={cls.Card__top}>
          <p className={cls.Card__name}>{name}</p>
          <p className={cls.Card__text}>{text}</p>
        </div>
        <div className={classNames(cls.CirclePic, {}, [className])}>
          <div className={cls.CirclePic__content}>
            {pic && (
              <img src={pic} className={classNames(cls.pic, {}, [picClass])} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CirclePic;
