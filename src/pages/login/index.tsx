import Button from '@/components/common/Button';
import KakaoLogo from '@/assets/svg/KakaoLogo.svg'


export default function Login() {

  const handleKakaoLogin =()=>{
  }

  return(
  <>
    <div>
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