import Radio from '@/components/common/Radio';
import { useToast } from '@/hooks/useToast';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const { addToasts } = useToast();

  const [isSelectedIndex, setIsSelectedIndex] = useState<number>(-1);

  return (
    <>
      <Radio
        options={['오늘', '지난주', '지난달', '죄송해요 전화 자주 할게요']}
        isSelectedIndex={isSelectedIndex}
        setIsSelectedIndex={setIsSelectedIndex}
      />
      <button onClick={() => addToasts('aa')}>토스트 추가</button>
      <button onClick={() => navigate('/')}>이동</button>
    </>
  );
};

export default HomePage;
