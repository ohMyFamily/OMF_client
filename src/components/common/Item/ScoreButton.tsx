import { Dispatch, SetStateAction, useEffect } from 'react';
import classNames from 'classnames';
import $ from './scorebutton.module.scss';
import Button1 from '../Typography/Button1';
import XCircle from '@/assets/svg/XCircle.svg?react';
import CheckCircle from '@/assets/svg/CheckCircle.svg?react';

interface ScoreButtonProps {
  state: boolean | null;
  setState: Dispatch<SetStateAction<boolean | null>>;
}

const ScoreButton = ({ state, setState }: ScoreButtonProps) => {
  const handleClick = (state: boolean) => {
    setState(state);
  };

  return (
    <div className={classNames($.scoreButtonContainer)}>
      <div
        className={classNames($.scoreButtonItem, {
          [$[`scoreButtonItemClicked`]]: state,
          [$[`scoreButtonItemcorrect`]]: true,
          [$[`textClicked`]]: state,
        })}
        onClick={() => handleClick(true)}
      >
        <CheckCircle
          className={classNames($.icon, {
            [$.iconCorrectClicked]: state,
          })}
        />
        <Button1>정답이에요!</Button1>
      </div>
      <div
        className={classNames($.scoreButtonItem, {
          [$[`scoreButtonItemClicked`]]: state !== null && !state,
          [$[`scoreButtonItemincorrect`]]: true,
          [$[`textClicked`]]: state !== null && !state,
        })}
        onClick={() => handleClick(false)}
      >
        <XCircle
          className={classNames($.icon, {
            [$.iconCorrectClicked]: state,
          })}
        />
        <Button1>틀렸어요!</Button1>
      </div>
    </div>
  );
};

export default ScoreButton;