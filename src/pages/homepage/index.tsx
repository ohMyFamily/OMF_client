import { useToast } from '@/hooks/useToast';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const { addToasts } = useToast();

  return (
    <>
      <button onClick={() => addToasts('aa')}>토스트 추가</button>
      <button onClick={() => navigate('/')}>이동</button>
    </>
  );
};

export default HomePage;
