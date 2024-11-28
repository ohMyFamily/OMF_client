import classNames from 'classnames';
import $ from './answerlistitem.module.scss';
import { Body2, Button1 } from '../Typography';

interface AnswerListItemProps {
  id: number;
  nickname: string;
  score: number;
  cardImage: string;
  isOpen: boolean;
  handleClick: (id: number, isOpen: boolean) => void;
}

function AnswerListItem({
  id,
  nickname,
  score,
  cardImage,
  isOpen,
  handleClick,
}: AnswerListItemProps) {
  return (
    <div
      className={classNames($.answerContainer, {
        [$.openState]: isOpen,
      })}
      onClick={() => handleClick(id, isOpen)}
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
