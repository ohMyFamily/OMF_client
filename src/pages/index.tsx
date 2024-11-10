import { useNavigate } from 'react-router-dom';
import $ from '../App.module.scss';
import ResultCard from '@/components/common/Card/ResultCard';
import GradingCard from '@/components/common/Card/GradingCard';
import AnswerListItem from '@/components/common/Card/AnswerListItem';


const IndexPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className={$.Wrapper}>
      <button onClick={() => navigate('/homepage')}>이동</button>
      <ResultCard score={100} />
      <GradingCard title="title" src={''} number={0} answer={''}/>
      <AnswerListItem />
    </div>
      </>
  );
};

export default IndexPage;
