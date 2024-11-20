import Button from '@/components/common/Button';
import KakaoLogo from '@/assets/svg/KakaoLogo.svg'
import BlueTitleText from '@/components/common/Item/blueTitleText';
import Caption1 from '@/components/common/Typography/Caption1';
import Title1 from '@/components/common/Typography/Title1';
import Body2 from '@/components/common/Typography/Body2';
import classNames from 'classnames';
import $ from './login.module.scss';
import { kakaoLoginLink } from '@/constants/develop.constants';
import MainIllust from '@/assets/svg/MainIllust.svg';

export default function Login() {
  const handleKakaoLogin = () => {
  window.location.href = kakaoLoginLink;
  }

  const handleTutorial = () => {

  }

  return(
  <>
    <div className={classNames($.Wrapper)}>
      <div className={classNames($.Container)}>
        <img src={MainIllust} className={classNames($.BackgroundSvg)} />

        <div className={classNames($.TextContainer)}>
          <BlueTitleText size="md">
            <Caption1>가정의 달 이벤트</Caption1>
          </BlueTitleText>
          <Title1>당신의 가족<br />어디까지 알고 있나요?</Title1>
          <Body2>그동안 무심한 듯 카네이션만 챙겼다면<br />올해는 단란한 시간을 선물해보세요.</Body2>
        </div>

        <div className={classNames($.ButtonContainer)}>
          <Button
              variant="kakaoLogin"
              onClick={handleKakaoLogin}
              icon={KakaoLogo}
            >
              카카오로 로그인
          </Button>
          <Button
              variant="secondary"
              onClick={handleTutorial}
            >
              어떻게 하는 거예요?
          </Button>
        </div>
      </div>
    </div>

  </>
  );
}