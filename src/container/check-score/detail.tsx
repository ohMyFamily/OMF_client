import $ from './checkScoreDetail.module.scss';
import classNames from 'classnames';
import AppBar from '@/components/common/AppBar';
import { useNavigate, useParams } from 'react-router-dom';
import { Body2, Title2 } from '@/components/common/Typography';
import ResultCard from '@/components/common/Card/ResultCard';
import AnimateCardSample from '@/components/domain/CheckScore/AnimateCardSample';
import Button from '@/components/common/Button';
import KakaoShareButton from '@/components/common/KakaoShareButton';
import { useScoreDetail } from '@/apis/queries/score';

export default function CheckScoreDetailLayout() {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useScoreDetail(Number(id));

  const onBack = () => {
    navigate(-1);
  };

  const handleNewTest = () => {
    navigate('/test');
  };

  return (
    <div className={classNames($.Wrapper)}>
      <div className={classNames($.PaddingContainer)}>
        <AppBar leftRole="back" onClickLeftButton={onBack} />
      </div>

      <div className={classNames($.Container)}>
        <div className={classNames($.ItemContainer)}>
          <div className={classNames($.Title)}>
            <Title2>
              {data.name}가
              <br /> 채점한 내 점수는?
            </Title2>
          </div>
          <ResultCard
            score={data.score}
            image={data.icon}
            title={data.title}
            description={data.subtitle}
            variant="score"
          />
          <div className={classNames($.contentDescription)}>
            <Body2>{data.content}</Body2>
          </div>
        </div>

        <div className={classNames($.AnimateCard)}>
          <div className={classNames($.PaddingContainer)}>
            <Title2>더 많은 카드를 수집해보세요!</Title2>
          </div>
          <AnimateCardSample />
        </div>

        <div className={classNames($.ButtonContainer)}>
          <KakaoShareButton variant="test" />
          <Button variant="secondary" onClick={handleNewTest}>
            새로운 테스트 시작하기
          </Button>
        </div>
      </div>
    </div>
  );
}
