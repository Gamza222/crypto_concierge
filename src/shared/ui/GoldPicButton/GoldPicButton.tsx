import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './GoldPicButton.module.scss';

interface GoldPicButtonProps {
  className?: string;
}

const GoldPicButton = ({ className }: GoldPicButtonProps) => {
  return (
    <button className={classNames(cls.GoldPicButton, {}, [className])}>
      {}
    </button>
  );
};

export default GoldPicButton;
