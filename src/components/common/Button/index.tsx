import classNames from 'classnames';
import { Button1 } from '../Typography';
import $ from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'tertiary' | 'kakaoLogin';
  disabled?: boolean;
  onClick: () => void;
  icon?: string;
}

export default function Button({
  children,
  variant,
  disabled = false,
  onClick,
  icon,
}: ButtonProps) {
  return (
    <button
      className={classNames($.size, {
        [$.primary]: variant === 'primary' && !disabled,
        [$.secondary]: variant === 'secondary' && !disabled,
        [$.tertiary]: variant === 'tertiary' && !disabled,
        [$.kakaoLogin]: variant === 'kakaoLogin',
        [$.disabled]: disabled,
      })}
      onClick={onClick}
    >
      {icon && <img className={$.iconWrapper} src={icon} />}
      <Button1>{children}</Button1>
    </button>
  );
}
