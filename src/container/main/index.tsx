import Button from "@/components/common/Button";
import { Button2, Title1 } from "@/components/common/Typography";
import $ from './main.module.scss';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import MainIllust from "@/assets/svg/MainIllust.svg";
import { useToast } from "@/hooks/useToast";
import { Storage } from "@/storage";


export default function MainLayout() {
  const navigate = useNavigate();
  const { addToasts } = useToast();

  const handleTest = () => {
    navigate('/test')
  }

  const handleCheckScore = () => {
    navigate('/check-score');
  }

  const handleLogout = () => {
    Storage.clearItems();
    addToasts('로그아웃 완료! 다음에 또 만나요~', { top: '531px' });
    navigate('/login');
  }; 

  return (
    <div className={classNames($.Wrapper)}>

      <div className={classNames($.Container)}>
        <img src={MainIllust} className={classNames($.BackgroundSvg)} alt='메인 일러스트'/>

        <div className={classNames($.TextWrapper)}>
          <Title1>당신의 가족<br/>어디까지 알고 있나요?</Title1>
          <div className={classNames($.ButtonContainer)}>
            <Button variant="primary" onClick={handleTest}>테스트 시작하기</Button>
            <Button variant="tertiary" onClick={handleCheckScore}>내 점수 확인하기</Button>
          </div>
          <div className={classNames($.LogoutButton)} onClick={handleLogout}>
            <Button2 underline={true}>로그아웃</Button2>
          </div>
        </div>
      </div>
    </div>
  );
}
