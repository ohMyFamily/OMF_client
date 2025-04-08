import Button from '@/components/common/Button';
import KakaoLogo from '@/assets/svg/KakaoLogo.svg';
import Caption1 from '@/components/common/Typography/Caption1';
import Title1 from '@/components/common/Typography/Title1';
import classNames from 'classnames';
import $ from './login.module.scss';
import { kakaoLoginLink } from '@/constants/develop.constants';
import BackgroundSVG from '@/components/common/Item/BackgroundSVG';
import BlueTitleText from '@/components/common/Item/BlueTitleText';
import { useNavigate } from 'react-router-dom';
import { Body3 } from '@/components/common/Typography';

export default function LoginLayout() {
  const navigate = useNavigate();
  const handleKakaoLogin = () => {
    window.location.href = kakaoLoginLink;
  };

  const handleTutorial = () => {
    navigate('/guide', { state: { from: 'login' } });
  };

  return (
    <>
      <div className={classNames($.Wrapper)}>
        <div className={classNames($.Container)}>
          <BackgroundSVG />
          <div className={classNames($.TextContainer)}>
            <BlueTitleText size="lg">
              <Caption1>가정의 달 이벤트</Caption1>
            </BlueTitleText>
            <Title1>
              당신의 가족
              <br />
              어디까지 알고 있나요?
            </Title1>
            <Body3>
              그동안 무심한 듯 카네이션만 챙겼다면
              <br />
              올해는 단란한 시간을 선물해보세요.
            </Body3>
          </div>
          <div className={classNames($.ButtonContainer)}>
            <Button variant="kakaoLogin" onClick={handleKakaoLogin} icon={KakaoLogo}>
              카카오로 로그인
            </Button>
            <Button variant="secondary" onClick={handleTutorial}>
              어떻게 하는 거예요?
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
