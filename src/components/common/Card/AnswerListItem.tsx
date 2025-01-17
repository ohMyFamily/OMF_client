import classNames from 'classnames';
import $ from './answerlistitem.module.scss';
import { Body3, Button1 } from '../Typography';

interface AnswerListItemProps {
  id: number;
  name: string;
  score: number;
  icon?: string;
  ischeck: boolean;
  handleClick: (id: number) => void;
}

function AnswerListItem({
  id,
  name,
  score,
  icon,
  ischeck,
  handleClick,
}: AnswerListItemProps) {
  return (
    <div
      className={classNames($.answerContainer, {
        [$.openState]: ischeck,
      })}
      onClick={() => handleClick(id)}
    >
      <img src={icon} alt={`${name}의 점수`} />
      <div className={classNames($.description)}>
        <span>
          <Button1>{ischeck ? `${score}점!` : `${name}님이`}</Button1>
        </span>
        <div className={classNames($.message)}>
          <Body3>{ischeck ? `${name}님이 채점한 답안지` : `채점한 답안지가 도착했어요!`}</Body3>
        </div>
      </div>
    </div>
  );
}

export default AnswerListItem;
