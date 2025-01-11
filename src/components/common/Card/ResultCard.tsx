import Body3 from '../Typography/Body3';
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
  // 점수가 80점인 경우(홍진효)
  const is80Score = score === 80;

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
        {is80Score ? (
          <div className={classNames($.specialTitleContainer)}>
            <Title2>{title}</Title2>
            {variant === 'score' && <Title2>{description}</Title2>}
          </div>
        ) : (
          <>
            <Title2>{title}</Title2>
            {variant === 'score' && <Body3>{description}</Body3>}
          </>
        )}
      </div>
    </div>
  );
};

export default ResultCard;
