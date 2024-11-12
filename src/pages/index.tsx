import { useNavigate } from 'react-router-dom';
import $ from '../App.module.scss';
import ResultCard from '@/components/common/Card/ResultCard';
import GradingCard from '@/components/common/Card/GradingCard';
import AnswerListItem from '@/components/common/Card/AnswerListItem';
import { useEffect, useRef, useState } from 'react';
import Call from '@/assets/svg/Tossface/Call.svg';
import AnimateCardSample from '@/components/domain/CheckScore/AnimateCardSample';

const IndexPage = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={$.Wrapper}>
        <button onClick={() => navigate('/homepage')}>이동</button>
        <ResultCard score={100} variant='score' />
        <AnimateCardSample />
        <GradingCard
          title={`어머니와\n언제 마지막으로 전화했나요?`}
          cardImage={Call}
          cardNumber={1}
          answer={'정답'}
        />
        <AnswerListItem
          nickname='낙현'
          score={80}
          cardImage=''
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </>
  );
};

export default IndexPage;
