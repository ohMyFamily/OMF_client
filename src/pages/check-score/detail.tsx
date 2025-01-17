import Spinner from '@/components/common/Spinner';
import CheckScoreDetailLayout from '@/container/check-score/detail';
import { Suspense } from 'react';

export default function CheckScoreDetail() {
  return (
    <Suspense fallback={<Spinner />}>
      <CheckScoreDetailLayout />
    </Suspense>
  );
}