import React, {
  Children,
  FC,
  PropsWithChildren,
  ReactNode,
  forwardRef,
  memo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Title.module.scss';

interface TitleProps {
  className?: string;
  children: ReactNode;
  ref?: React.MutableRefObject<HTMLDivElement | null>;
}

const Title: FC<TitleProps> = memo(
  forwardRef(({ className, children }, ref) => {
    return (
      <h3 ref={ref} className={classNames(cls.Title, {}, [className])}>
        {children}
      </h3>
    );
  }),
);
export default Title;
