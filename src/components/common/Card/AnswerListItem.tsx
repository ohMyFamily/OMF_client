import classNames from 'classnames';
import $ from './answerlistitem.module.scss';
import { Body2, Button1 } from '../Typography';

interface AnswerListItemProps {
  id: number;
  nickname: string;
  score: number;
  cardImage?: string;
  icon?: string;
  isOpen: boolean;
  handleClick: (id: number) => void;
}

function AnswerListItem({
  id,
  nickname,
  score,
  cardImage,
  icon,
  isOpen,
  handleClick,
}: AnswerListItemProps) {
  return (
    <div
      className={classNames($.answerContainer, {
        [$.openState]: isOpen,
      })}
      onClick={() => handleClick(id)}
    >
      {cardImage ? (
        <img src={cardImage} alt={`${nickname}의 사진`} />
      ) : (
        <img src={icon} alt={`${nickname}의 점수`} />
      )}
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
