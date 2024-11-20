import Button from '@/components/common/Button';
import KakaoLogo from '@/assets/svg/KakaoLogo.svg'
import BlueTitleText from '@/components/common/Item/blueTitleText';
import Caption1 from '@/components/common/Typography/Caption1';
import Title1 from '@/components/common/Typography/Title1';
import Body2 from '@/components/common/Typography/Body2';
import classNames from 'classnames';
import $ from './login.module.scss';
import { kakaoLoginLink } from '@/constants/develop.constants';


export default function Login() {
  const handleKakaoLogin = () => {
  window.location.href = kakaoLoginLink;
  }

  const handleTutorial = () => {

  }

  return(
  <>
    <div>
        <BlueTitleText size="md">
          <Caption1>가정의 달 이벤트</Caption1>
        </BlueTitleText>

        <Button
            variant="kakaoLogin"
            onClick={handleKakaoLogin}
            icon={KakaoLogo}
          >
            카카오로 로그인
        </Button>
    </div>
  </>
  );
}