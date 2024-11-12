import Body2 from '../Typography/Body2';
import Title2 from '../Typography/Title2';
import classNames from 'classnames';
import $ from './resultcard.module.scss';
import { ResultCardProps } from './CardType';
import { scoreImages } from '@/constants/business.constants';
import getScoreInfo from '@/hooks/getScoreInfo';

const ResultCard = ({ score, variant, isHas }: ResultCardProps) => {
  const scoreInfo = getScoreInfo(score);

  return (
    <div
      className={classNames($.resultcard, {
        [$.animate]: variant === 'animate',
      })}
    >
      {variant === 'score' && <div className={classNames($.score)}>{score}</div>}
      <img
        src={scoreImages[scoreInfo.imageKey]}
        alt={`Score ${scoreInfo.description}`}
        className={classNames($.image, {
          [$.animate]: variant === 'animate',
          [$.blur]: variant === 'animate' && !isHas,
        })}
      />
      <div
        className={classNames($.content, {
          [$.blur]: variant === 'animate' && !isHas,
        })}
      >
        <Title2>{scoreInfo.title}</Title2>
        {variant === 'score' && <Body2>{scoreInfo.description}</Body2>}
      </div>
    </div>
  );
};

export default ResultCard;
