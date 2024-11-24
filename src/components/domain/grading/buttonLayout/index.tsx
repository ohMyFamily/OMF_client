import Button from '@/components/common/Button';
import $ from '../grading.module.scss';
import KakaoLogo from '@/assets/svg/KakaoLogo.svg';
import { useNavigate } from 'react-router-dom';

export default function ButtonLayout() {
  const onClickShareButton = () => {};
  const navigate = useNavigate();
  const onClickTestButton = () => {
    navigate('/');
  };
  return (
    <div className={$.buttonLayout}>
      <Button variant="secondary" onClick={onClickTestButton}>
        나도 테스트하러 가기
      </Button>
      <Button icon={KakaoLogo} variant="kakaoLogin" onClick={onClickShareButton}>
        테스트 공유하기
      </Button>
    </div>
  );
}
