import React from 'react';
import cls from './ButtonGold.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';

interface ButtonGoldProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: any;
}

const ButtonGold = ({ className, children, ...props }: ButtonGoldProps) => {
  return (
    <button className={classNames(cls.ButtonGold, {}, [className])} {...props}>
      <div className={cls.ButtonGold__content}>{children}</div>
    </button>
  );
};

export default ButtonGold;
