import Spinner from '@/components/common/Spinner';
import CheckScoreLayout from '@/container/check-score';
import { Suspense } from 'react';

export default function CheckScore() {
  return (
    <Suspense fallback={<Spinner />}>
      <CheckScoreLayout />
    </Suspense>
  );
}
