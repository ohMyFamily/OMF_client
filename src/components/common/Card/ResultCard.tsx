import Body2 from '../Typography/Body2';
import Title2 from '../Typography/Title2';
import classNames from 'classnames';
import $ from './resultcard.module.scss';

export interface ResultCardProps {
  score: number;
  image: string;
  title: string;
  description: string;
  variant: 'score' | 'animate';
  isHas?: boolean;
}
const ResultCard = ({ score, image, title, description, variant, isHas }: ResultCardProps) => {
  return (
    <div
      className={classNames($.resultcard, {
        [$.animate]: variant === 'animate',
      })}
    >
      {variant === 'score' && <div className={classNames($.score)}>{score}점!</div>}
      <img
        src={image}
        alt={'점수 이미지'}
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
        <Title2>{title}</Title2>
        {variant === 'score' && <Body2>{description}</Body2>}
      </div>
    </div>
  );
};

export default ResultCard;
