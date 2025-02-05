import ScoreSkeletonLayout from '@/container/skeleton/score';
import CheckScoreDetailLayout from '@/container/check-score/detail';
import { Suspense } from 'react';

export default function CheckScoreDetail() {
  return (
    <Suspense fallback={<ScoreSkeletonLayout />}>
      <CheckScoreDetailLayout />
    </Suspense>
  );
}
