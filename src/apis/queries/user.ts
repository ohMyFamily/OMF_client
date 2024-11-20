import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '@/apis/instance';
import { kakaoLogin } from '../api/auth';


export const useKakaoLoginQuery = () => {
    const navigate = useNavigate();
    
    return useMutation({
    mutationFn: kakaoLogin,
    onSuccess: (data) => {
        setAuthToken(data.data.accessToken);
        navigate('/');
    },
    onError: () => navigate('/login')
    });
};