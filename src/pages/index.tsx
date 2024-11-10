import { useNavigate } from 'react-router-dom';
import ScoreButton from '@/components/common/Item/ScoreButton';


const IndexPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/homepage')}>이동</button>
      <ScoreButton items={['correct', 'incorrect']} />
      </>
  );
};

export default IndexPage;
