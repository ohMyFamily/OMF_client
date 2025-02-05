import ScoreSkeleton from '@/components/common/Skeleton/score';
import CheckScoreDetailLayout from '@/container/check-score/detail';
import { Suspense } from 'react';

export default function CheckScoreDetail() {
  return (
    <Suspense fallback={<ScoreSkeleton />}>
      <CheckScoreDetailLayout />
    </Suspense>
  );
}
