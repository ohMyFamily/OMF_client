import { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';
import $ from './answerlistitem.module.scss';
import { Body2, Button1 } from '../Typography';

interface AnswerListItemProps {
  nickname: string;
  score: number;
  cardImage: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function AnswerListItem({ nickname, score, cardImage, isOpen, setIsOpen }: AnswerListItemProps) {
  const handleClick = async () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <div
      className={classNames($.answerContainer, {
        [$.openState]: isOpen,
      })}
      onClick={handleClick}
    >
      <img src={cardImage} alt={`${nickname}의 프로필`} />
      <div className={classNames($.description)}>
        <span>
          <Button1>{isOpen ? `${score}점!` : nickname}</Button1>
        </span>
        <div className={classNames($.message)}>
          <Body2>{isOpen ? `${nickname}님이 채점한 답안지` : `채점한 답안지가 도착했어요!`}</Body2>
        </div>
      </div>
    </div>
  );
}

export default AnswerListItem;
