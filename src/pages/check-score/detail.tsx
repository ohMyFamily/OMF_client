import { useParams } from 'react-router-dom';

export default function CheckScoreDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>점수 상세보기 </h1>
      <h1>점수id: {id}</h1>
    </div>
  );
}
