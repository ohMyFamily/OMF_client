import $ from './checkScoreDetail.module.scss';
import classNames from 'classnames';
import AppBar from '@/components/common/AppBar';
import { useNavigate } from 'react-router-dom';
import { Body1, Title2 } from '@/components/common/Typography';
import GradingCard from '@/components/common/Card/GradingCard';
import ResultCard from '@/components/common/Card/ResultCard';
import AnimateCardSample from '@/components/domain/CheckScore/AnimateCardSample';
import Button from '@/components/common/Button';
import KakaoLogo from '@/assets/svg/KakaoLogo.svg';
import { ResultCardProps } from '@/components/common/Card/ResultCard';

interface CheckScoreDetailProps extends ResultCardProps {
  nickname: string;
  explanation: string;
}

export default function CheckScoreDetailLayout({
  score,
  nickname,
  image,
  title,
  description,
  explanation,
}: CheckScoreDetailProps) {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  const handleShare = () => {};

  const handleNewTest = () => {
    navigate('/test');
  };

  return (
    <div className={classNames($.Wrapper)}>
      <AppBar leftRole="back" onClickLeftButton={onBack} />
      <div className={classNames($.Container)}>
        <div className={classNames($.ItemContainer)}>
          <div className={classNames($.Title)}>
            <Title2>
              {nickname}가
              <br /> 채점한 내 점수는?
            </Title2>
          </div>
          <ResultCard
            score={score}
            image={image}
            title={title}
            description={description}
            variant="score"
          />
          <Body1>{explanation}</Body1>
        </div>
        <div className={classNames($.AnimateCard)}>
          <Title2>더 많은 카드를 수집해보세요!</Title2>
          <AnimateCardSample />
        </div>

        <div className={classNames($.ButtonContainer)}>
          <Button variant="kakaoLogin" onClick={handleShare} icon={KakaoLogo}>
            테스트 공유하기
          </Button>
          <Button variant="secondary" onClick={handleNewTest}>
            새로운 테스트 시작하기
          </Button>
        </div>
      </div>
    </div>
  );
}
