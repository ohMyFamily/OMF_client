import CheckLayout from '@/container/grading/check';
import CompleteLayout from '@/container/grading/complete';
import GuideLayout from '@/container/grading/guide';
import MainLayout from '@/container/grading/main';
import { useFunnel } from '@/hooks/useFunnel';
import { useState } from 'react';

export default function Grading() {
  const step = ['메인', '가이드', '채점', '완료'];
  const [answerList, setAnswerList] = useState<(boolean | null)[]>(Array(10).fill(null));

  const funnelData = {
    answer: [answerList, setAnswerList] as [(boolean | null)[], typeof setAnswerList],
  };
  const { FunnelComponent: Funnel, handleStep } = useFunnel(step, funnelData);

  return (
    <Funnel>
      <Funnel.Steps name="메인">
        <MainLayout handleStep={handleStep} />
      </Funnel.Steps>
      <Funnel.Steps name="가이드">
        <GuideLayout handleStep={handleStep} />
      </Funnel.Steps>
      <Funnel.Steps name="채점">
        <CheckLayout handleStep={handleStep} />
      </Funnel.Steps>
      <Funnel.Steps name="완료">
        <CompleteLayout handleStep={handleStep} />
      </Funnel.Steps>
    </Funnel>
  );
}
