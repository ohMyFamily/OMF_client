import Button from "@/components/common/Button";
import { Button2, Title1 } from "@/components/common/Typography";
import $ from './main.module.scss';
import classNames from 'classnames';
import { handleLogout } from "@/apis/instance";
import { useNavigate } from 'react-router-dom';
import MainIllust from "@/assets/svg/MainIllust.svg";


export default function Main() {
  const navigate = useNavigate();

  const handleTest = () => {
    navigate('/test')
  }

  const handleCheckScore = () => {
    navigate('/check-score')
  }

  return (
    <div className={classNames($.Wrapper)}>
      <img src={MainIllust} alt="메인 일러스트" />

      <div className={classNames($.TextWrapper)}>
        <Title1>당신의 가족<br/>어디까지 알고 있나요?</Title1>
        <div className={classNames($.ButtonContainer)}>
          <Button variant="primary" onClick={handleTest}>테스트 시작하기</Button>
          <Button variant="tertiary" onClick={handleCheckScore}>내 점수 확인하기</Button>
        </div>
        <Button2 underline={true} onClick={handleLogout}>로그아웃</Button2>
      </div>
    </div>
  );
}
