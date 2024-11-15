import Spinner from '@/components/common/Spinner';
import Sample from '@/components/sample';
import { Suspense } from 'react';

const HomePage = () => {
  return (
    <div style={{ height: '300px', overflowY: 'scroll' }}>
      <Suspense fallback={<Spinner />}>
        <Sample />
      </Suspense>
    </div>
  );
};

export default HomePage;