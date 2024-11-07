import $ from './typography.module.scss';
import classNames from 'classnames';

interface TitleProps {
  children: React.ReactNode;
  underline?: boolean;
}

export default function Button2({ children, underline = false }: TitleProps) {
  return <span className={classNames($.button2, underline && $.underline)}>{children}</span>;
}
