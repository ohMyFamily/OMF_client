import CheckLayout from '@/container/grading/check';
import HasImage from '@/container/grading/complete/HasImage';
import NoImage from '@/container/grading/complete/NoImage';
import GuideLayout from '@/container/grading/guide';
import MainLayout from '@/container/grading/main';
import { useFunnel } from '@/hooks/useFunnel';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Grading() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');
  const nickname = searchParams.get('nickname');

  const step = ['메인', '가이드', '채점', '완료'];
  const [answerList, setAnswerList] = useState<(boolean | null)[]>(Array(10).fill(null));

  const funnelData = {
    answer: [answerList, setAnswerList] as [(boolean | null)[], typeof setAnswerList],
  };
  const { FunnelComponent: Funnel, handleStep } = useFunnel(step, funnelData);
  const [hasImage, setHasImage] = useState<boolean>(false);

  return (
    <Funnel>
      <Funnel.Steps name="메인">
        <MainLayout handleStep={handleStep} nickname={nickname} />
      </Funnel.Steps>
      <Funnel.Steps name="가이드">
        <GuideLayout handleStep={handleStep} nickname={nickname!} />
      </Funnel.Steps>
      <Funnel.Steps name="채점">
        <CheckLayout handleStep={handleStep} setHasImage={setHasImage} />
      </Funnel.Steps>
      <Funnel.Steps name="완료">
        {hasImage ? <HasImage handleStep={handleStep} /> : <NoImage handleStep={handleStep} />}
      </Funnel.Steps>
    </Funnel>
  );
}
