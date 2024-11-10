import { useNavigate } from 'react-router-dom';
import ScoreButton from '@/components/common/Item/ScoreButton';
import $ from '../App.module.scss';
import ResultCard from '@/components/common/Card/ResultCard';


const IndexPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className={$.Wrapper}>
      <button onClick={() => navigate('/homepage')}>이동</button>
      <ScoreButton items={['correct', 'incorrect']} />
      <ResultCard score={100} />
    </div>
      </>
  );
};

export default IndexPage;
