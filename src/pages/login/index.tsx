import Button from '@/components/common/Button';
import KakaoLogo from '@/assets/svg/KakaoLogo.svg'


export default function Login() {
  const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin =()=>{
  window.location.href = link;
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