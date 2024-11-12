import classNames from 'classnames';
import $ from './typography.module.scss';

interface TitleProps {
  children: React.ReactNode;
  emphasis?: boolean;
}

export default function Body1({ children, emphasis }: TitleProps) {
  return <p className={classNames($.body1, emphasis && $.underline)}>{children}</p>;
}
