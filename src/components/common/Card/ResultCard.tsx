import Body2 from "../Typography/Body2";
import Title2 from "../Typography/Title2";
import classNames from 'classnames';
import $ from './resultcard.module.scss';
import P20 from '@/assets/svg/Tossface/P20.svg';
import P40 from '@/assets/svg/Tossface/P40.svg';
import P60 from '@/assets/svg/Tossface/P60.svg';
import P80 from '@/assets/svg/Tossface/P80.svg';
import P90 from '@/assets/svg/Tossface/P90.svg';
import P100 from '@/assets/svg/Tossface/P100.svg';

const scoreImages = {
  P20,
  P40,
  P60,
  P80,
  P90,
  P100,
};

const ScoreTable = [
  ["20점", "P20", "말하는 감자", "저는 말하는 감자라구요. 아시겠어요?"],
  ["40점", "P40", "효자 맛보기 스푼", "효도를 이렇게 콕 찍어서 뇸!"],
  ["60점", "P60", "효자 호소인", "어어색할거같진 않고 분명히어색할거같아요"],
  ["80점", "P80", "말하는 감자", "저는 말하는 감자라구요. 아시겠어요?"],
  ["90점", "P90", "홍진효", "홍진효"],
  ["100점", "P100", "인간 코지마", "사랑하니까 바디프렌드 (둘 다 광고 아님)"],
];

interface ResultCardProps {
  score: number;
}

const ResultCard = ({ score }: ResultCardProps) => {
  const getScoreInfo = () => {
    if (score <= 20) return ScoreTable[0];
    if (score <= 40) return ScoreTable[1];
    if (score <= 60) return ScoreTable[2];
    if (score <= 80) return ScoreTable[3];
    if (score <= 90) return ScoreTable[4];
    return ScoreTable[5];
  };

  const [scoreText, scoreImg, titleText, description] = getScoreInfo();

  return (
    <div className={classNames($.resultcard)}>
      <div className={classNames($.score)}>
        {scoreText}
      </div>

        <img 
          src={scoreImages[scoreImg as keyof typeof scoreImages]}
          alt={`Score ${scoreText}`} 
          className={classNames($.image)}
        />

      <div className={classNames($.content)}>
        <Title2>
          {titleText}
        </Title2>
        <Body2>
          {description}
        </Body2>
      </div>
    </div>
  );
};

export default ResultCard;