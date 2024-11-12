import classNames from 'classnames';
import $ from './gradingcard.module.scss';
import ScoreButton from '../Item/ScoreButton';
import Title3 from '../Typography/Title3';
import Caption1 from '../Typography/Caption1';
import Body1 from '../Typography/Body1';
import { TOTAL_QUESTION } from '@/constants/business.constants';
import { useState } from 'react';

interface GradingCardProps {
  title: string;
  cardImage: string;
  cardNumber: number;
  answer: string;
}
function GradingCard({ cardNumber, title, answer, cardImage }: GradingCardProps) {
  const [correctState, setCorrectState] = useState<boolean | null>(null);
  return (
    <div className={classNames($.gradingcard)}>
      <div className={classNames($.number)}>
        <Caption1>
          {cardNumber}/{TOTAL_QUESTION}
        </Caption1>
      </div>
      <div className={classNames($.questionWrapper)}>
        <img src={cardImage} />
        <Title3>{title}</Title3>
      </div>
      <div className={classNames($.answerWrapper)}>
        <Body1>{answer}</Body1>
      </div>
      <div className={classNames($.ScoreButton)}>
        <ScoreButton state={correctState} setState={setCorrectState} />
      </div>
    </div>
  );
}

export default GradingCard;
