import { useGetSample } from '@/apis/queries/question';
import { sampleType } from '@/apis/queries/type';
const HomePage = () => {
  const { data } = useGetSample();

  return (
    <>
      {data?.map((item: sampleType) => {
        return (
          <>
            <p>{item.id}</p>
            <strong> {item.title}</strong>
            <strong> {item.body}</strong>
          </>
        );
      })}
    </>
  );
};

export default HomePage;
