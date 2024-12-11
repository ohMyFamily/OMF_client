import Spinner from '@/components/common/Spinner';
import CheckLayout from '@/container/grading/check';
import HasImage from '@/container/grading/complete/HasImage';
import NoImage from '@/container/grading/complete/NoImage';
import GuideLayout from '@/container/grading/guide';
import MainLayout from '@/container/grading/main';
import { useFunnel } from '@/hooks/useFunnel';
import { Suspense, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Grading() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');
  const nickname = searchParams.get('nickname');

  const step = ['메인', '가이드', '채점', '완료'];

  const { FunnelComponent: Funnel, handleStep } = useFunnel(step, {});
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
        <Suspense fallback={<Spinner />}>
          <CheckLayout handleStep={handleStep} setHasImage={setHasImage} />
        </Suspense>
      </Funnel.Steps>
      <Funnel.Steps name="완료">
        {hasImage ? <HasImage handleStep={handleStep} /> : <NoImage handleStep={handleStep} />}
      </Funnel.Steps>
    </Funnel>
  );
}
