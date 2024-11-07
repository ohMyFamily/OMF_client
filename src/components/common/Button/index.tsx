import classNames from 'classnames';
import { Button1, Button2 } from '../Typography';
import $ from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  size: 'b' | 's';
  variant: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  onClick: () => void;
}

export default function Button({
  children,
  size,
  variant,
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={classNames($.size, {
        [$.b]: size === 'b',
        [$.s]: size === 's',
        [$.primary]: variant === 'primary' && !disabled,
        [$.secondary]: variant === 'secondary' && !disabled,
        [$.tertiary]: variant === 'tertiary' && !disabled,
        [$.disabled]: disabled,
      })}
      onClick={onClick}
    >
      {size === 'b' && <Button1>{children}</Button1>}
      {size === 's' && <Button2>{children}</Button2>}
    </button>
  );
}
