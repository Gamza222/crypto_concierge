import React from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './TextBox.module.scss';
import { useTranslation } from 'react-i18next';
import DescriptionText from '../DescriptionText/DescriptionText';

export enum TextBoxAlign {
  START = 'start',
  END = 'end',
  CENTER = 'center',
}

export interface TextBoxData {
  title: string;
  descr: string;
}
interface TextBoxProps extends TextBoxData {
  className?: string;
  align?: TextBoxAlign;
}

const TextBox = ({
  className,
  title,
  descr,
  align = TextBoxAlign.START,
}: TextBoxProps) => {
  const { t } = useTranslation('learnData');
  return (
    <article className={classNames(cls.TextBox, {}, [className, cls[align]])}>
      <h6 className={cls.TextBox__title}>{t(title)}</h6>
      <DescriptionText>{t(descr)}</DescriptionText>
    </article>
  );
};

export default TextBox;
