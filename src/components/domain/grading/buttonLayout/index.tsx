import Button from '@/components/common/Button';
import $ from '../grading.module.scss';
import { useNavigate } from 'react-router-dom';
import KakaoShareButton from '@/components/common/KakaoShareButton';

export default function ButtonLayout() {
  const navigate = useNavigate();
  const onClickTestButton = () => {
    navigate('/login');
  };
  return (
    <div className={$.buttonLayout}>
      <Button variant="secondary" onClick={onClickTestButton}>
        나도 테스트하러 가기
      </Button>
      <KakaoShareButton variant="test" />
    </div>
  );
}
