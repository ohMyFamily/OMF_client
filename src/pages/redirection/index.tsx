import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { kakaoLogin } from '@/apis/api/auth';

export default function Redirection() {
    const code = new URL(window.location.href).searchParams.get('code');
    const navigate = useNavigate();
    
    useEffect(() => {
        if (code) {
            kakaoLogin(code)
                .then(response => {
                    if (response.isSuccess) {
                        navigate('/');
                    } else {
                        navigate('/login');
                    }
                })
                .catch(error => {
                    console.error('Login failed:', error);
                    navigate('/login');
                });
        }
    }, [code, navigate]);

    return <div>로그인 처리중</div>;
};