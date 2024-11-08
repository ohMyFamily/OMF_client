import classNames from 'classnames';
import { Button1 } from '../Typography';
import $ from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  onClick: () => void;
}

export default function Button({ children, variant, disabled = false, onClick }: ButtonProps) {
  return (
    <button
      className={classNames($.size, {
        [$.primary]: variant === 'primary' && !disabled,
        [$.secondary]: variant === 'secondary' && !disabled,
        [$.tertiary]: variant === 'tertiary' && !disabled,
        [$.disabled]: disabled,
      })}
      onClick={onClick}
    >
      <Button1>{children}</Button1>
    </button>
  );
}
