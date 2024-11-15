import { useGetSample } from '@/apis/queries/question';
import { sampleType } from '@/apis/queries/type';
import { Suspense } from 'react';

export default function Sample() {
  const { data } = useGetSample();

  return (
    <Suspense fallback={<h1>로딩중입니다~!</h1>}>
      <>
        {data.map((item: sampleType) => {
          return (
            <>
              <p>{item.id}</p>
              <strong> {item.title}</strong>
              <strong> {item.body}</strong>
            </>
          );
        })}
      </>
    </Suspense>
  );
}
