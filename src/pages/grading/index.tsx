import GradingSkeletonLayout from '@/container/skeleton/grading';
import Spinner from '@/components/common/Spinner';
import CheckLayout from '@/container/grading/check';
import HasImage from '@/container/grading/complete/HasImage';
import NoImage from '@/container/grading/complete/NoImage';
import GuideLayout from '@/container/grading/guide';
import MainLayout from '@/container/grading/main';
import { useFunnel } from '@/hooks/useFunnel';
import { Suspense, useState } from 'react';
import CheckedLayout from '@/container/grading/checked';

export default function Grading() {
  const step = ['메인', '가이드', '채점', '채점완료', '완료'];
  const { FunnelComponent: Funnel, handleStep } = useFunnel(step, {});
  const [hasImage, setHasImage] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  return (
    <Funnel>
      <Funnel.Steps name="메인">
        <Suspense fallback={<Spinner />}>
          <MainLayout handleStep={handleStep} />
        </Suspense>
      </Funnel.Steps>
      <Funnel.Steps name="가이드">
        <Suspense fallback={<Spinner />}>
          <GuideLayout handleStep={handleStep} />
        </Suspense>
      </Funnel.Steps>
      <Funnel.Steps name="채점">
        <Suspense fallback={<GradingSkeletonLayout />}>
          <CheckLayout
            handleStep={handleStep}
            setHasImage={setHasImage}
            setImageUrl={setImageUrl}
          />
        </Suspense>
      </Funnel.Steps>
      <Funnel.Steps name="채점완료">
        <Suspense fallback={<GradingSkeletonLayout />}>
          <CheckedLayout
            handleStep={handleStep}
            setHasImage={setHasImage}
            setImageUrl={setImageUrl}
          />
        </Suspense>
      </Funnel.Steps>
      <Funnel.Steps name="완료">
        <Suspense fallback={<Spinner />}>
          {hasImage ? (
            <HasImage handleStep={handleStep} imageUrl={imageUrl} />
          ) : (
            <NoImage handleStep={handleStep} />
          )}
        </Suspense>
      </Funnel.Steps>
    </Funnel>
  );
}
