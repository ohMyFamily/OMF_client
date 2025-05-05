import classNames from 'classnames';
import $ from './gradingcard.module.scss';
import ScoreButton from '../Item/ScoreButton';
import Title3 from '../Typography/Title3';
import Caption1 from '../Typography/Caption1';
import Body2 from '../Typography/Body3';
import { TOTAL_QUESTION } from '@/constants/business.constants';
import BlueTitleText from '../Item/BlueTitleText';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import React from 'react';

interface GradingCardProps {
  title: string;
  cardImage: string;
  cardNumber: string | number;
  answer?: string;
  state: (boolean | null)[];
  setState: Dispatch<SetStateAction<(boolean | null)[]>>;
  index: number;
  canEdit: boolean;
  mainRef?: React.RefObject<HTMLDivElement>;
}

function GradingCard({
  cardNumber,
  title,
  answer,
  cardImage,
  state,
  setState,
  index,
  canEdit,
  mainRef
}: GradingCardProps) {
  const [correctState, setCorrectState] = useState<boolean | null>(state[index]);

  useEffect(() => {
    if (correctState !== state[index]) {
      setState((prev) => [...prev.slice(0, index), correctState, ...prev.slice(index + 1)]);
    }
  }, [correctState]);

  return (
    <div className={classNames($.gradingcard)}>
      <BlueTitleText size="md">
        <Caption1>
          {typeof cardNumber === 'number' ? `${cardNumber} / ${TOTAL_QUESTION}` : cardNumber}
        </Caption1>
      </BlueTitleText>
      <div className={classNames($.questionWrapper)}>
        <img src={cardImage} />
        <Title3>{title}</Title3>
      </div>
      <div className={classNames($.answerWrapper)}>
        <Body2>{answer}</Body2>
      </div>
      <div className={classNames($.ScoreButton)}>
        <ScoreButton 
          state={correctState} 
          setState={setCorrectState} 
          canEdit={canEdit}
          mainRef={mainRef}
        />
      </div>
    </div>
  );
}

export default React.memo(GradingCard);