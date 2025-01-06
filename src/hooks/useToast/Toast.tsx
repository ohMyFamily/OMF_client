import { useEffect, useState } from 'react';
import $ from './toast.module.scss';
import { ToastType } from '.';
import { Body3 } from '@/components/common/Typography';
import classNames from 'classnames';
import React from 'react';

type ToastProps = ToastType & {
  deleteToast: (id: string) => void;
};

function Toast({ content, id, deleteToast, style}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const deleteTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        deleteToast(id);
      }, 300);
    }, 4000);

    return () => clearTimeout(deleteTimer);
  }, []);

  return (
    <span
      className={classNames($.layout, {
        [$.visible]: isVisible,
        [$.hidden]: !isVisible,
      })}
      style={style}
    >
      <Body3>{content}</Body3>
    </span>
  );
}

export default React.memo(Toast);
