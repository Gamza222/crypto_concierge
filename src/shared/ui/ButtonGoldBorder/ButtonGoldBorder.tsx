import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ButtonGoldBorder.module.scss';

interface ButtonGoldBorderProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  title: string;
  text: string;
  Pic: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const ButtonGoldBorder = ({
  className,
  title,
  text,
  Pic,
  ...props
}: ButtonGoldBorderProps) => {
  return (
    <button className={classNames(cls.ButtonGoldBorder, {}, [className])}>
      <div className={cls.content}>
        <Pic />
        <div className={cls.Text}>
          <p className={cls.Text__title}>{title}</p>
          <p className={cls.Text__info}>{text}</p>
        </div>
      </div>
    </button>
  );
};

export default ButtonGoldBorder;
