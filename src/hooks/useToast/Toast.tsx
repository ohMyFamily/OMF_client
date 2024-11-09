import { useEffect, useState } from 'react';
import $ from './toast.module.scss';
import { ToastType } from '.';
import { Body2 } from '@/components/common/Typography';
import classNames from 'classnames';
import React from 'react';

type ToastProps = ToastType & {
  deleteToast: (id: string) => void;
};

function Toast({ content, id, deleteToast }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const deleteTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        deleteToast(id);
      }, 300);
    }, 1000);

    return () => clearTimeout(deleteTimer);
  }, []);

  return (
    <span
      className={classNames($.layout, {
        [$.visible]: isVisible,
        [$.hidden]: !isVisible,
      })}
    >
      <Body2>{content}</Body2>
    </span>
  );
}

export default React.memo(Toast);
