import $ from './typography.module.scss';
import classNames from 'classnames';

interface TitleProps {
  children: React.ReactNode;
  onClick: () => void;
  underline?: boolean;
}

export default function Button2({ children, underline = false, onClick }: TitleProps) {
  return (
    <span className={classNames($.button2, underline && $.underline)} onClick={onClick}>
      {children}
    </span>
  );
}
