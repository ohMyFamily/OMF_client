import AppBar from '@/components/common/AppBar';
import GradingCard from '@/components/common/Card/GradingCard';
import Call from '@/assets/svg/Tossface/Call.svg';
import $ from './guide.module.scss';
import { Body3 } from '@/components/common/Typography';
import Button from '@/components/common/Button';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserNames } from '@/apis/queries/user';
import cutName from '@/utils/cutName';

type GuideLayoutProps = {
  handleStep: (step: string) => void;
};

export default function GuideLayout({ handleStep }: GuideLayoutProps) {
  const {quizid} = useParams();
  const names = useGetUserNames(Number(quizid));

  const [sample, setSample] = useState<(boolean | null)[]>([null]);
  const onClickLeftButton = () => {
    handleStep('메인');
  };

  const onClickStartCheck = () => {
    handleStep('채점');
  };

  return (
    <div className={$.layout}>
      <AppBar leftRole="back" onClickLeftButton={onClickLeftButton} className={$.appBar} />
      <GradingCard
        title={`아래는 ${cutName(names.kakao_nickname)}이
         나에 대해 답한 내용입니다.`}
        cardImage={Call}
        cardNumber="연습문제"
        answer="맞으면 정답이에요! 오답이면 틀렸어요.
        를 눌러주세요!"
        state={sample}
        setState={setSample}
        index={0}
        canEdit={true}

      />
      <div className={$.textWrapper}>
        <Body3>
          채점할 준비가 되었다면
          <br />
          정답이에요 또는 틀렸어요 중 아무거나 눌러보세요.
          <br />
          아래 버튼이 활성화됩니다!
        </Body3>
      </div>
      <div className={$.nextButton}>
        <Button variant="secondary" onClick={onClickStartCheck} disabled={sample[0] === null}>
          채점 시작하기
        </Button>
      </div>
    </div>
  );
}
