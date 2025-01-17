import classNames from 'classnames';
import $ from './typography.module.scss';

interface TitleProps {
  children: React.ReactNode;
  emphasis?: boolean;
}

export default function Body2({ children, emphasis }: TitleProps) {
  return <p className={classNames($.body2, emphasis && $.emphasis)}>{children}</p>;
}
