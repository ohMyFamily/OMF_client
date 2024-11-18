import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { kakaoLogin, UseKakaoLoginMutation } from '@/apis/api/auth';
import { useMutation } from '@tanstack/react-query';
import { setAuthToken } from '@/apis/instance';

export default function Redirection() {
    const code = new URL(window.location.href).searchParams.get('code');
    const navigate = useNavigate();

    //  기존: 직접 axios 호출
    //  const response = await kakaoLogin(code);

    //  변경: React Query mutation 사용
    const { mutate }: UseKakaoLoginMutation = useMutation({
        mutationFn: kakaoLogin,
        onSuccess: (data) => {
            setAuthToken(data.data.accessToken);
            navigate('/');
        },
        onError: () => navigate('/login')
    });

    useEffect(() => {
        if (code) {
            mutate(code);
        }
    }, [code, mutate]);

    return <div>로그인 처리중</div>;
}
