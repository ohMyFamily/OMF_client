import classNames from 'classnames';
import $ from './answerlistitem.module.scss';
import { Body3, Button1 } from '../Typography';

interface AnswerListItemProps {
  id: number;
  name: string;
  score: number;
  icon?: string;
  isOpen: boolean;
  handleClick: (id: number) => void;
}

function AnswerListItem({
  id,
  name,
  score,
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
      <img src={icon} alt={`${name}의 점수`} />
      <div className={classNames($.description)}>
        <span>
          <Button1>{isOpen ? `${score}점!` : name}</Button1>
        </span>
        <div className={classNames($.message)}>
          <Body3>{isOpen ? `${name}님이 채점한 답안지` : `채점한 답안지가 도착했어요!`}</Body3>
        </div>
      </div>
    </div>
  );
}

export default AnswerListItem;
