import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '@/apis/instance';
import { kakaoLogin } from '../api/auth';

interface LoginApiResponseFormat<T> {
    isSuccess: boolean;
    code: string;
    message: string;
    data: T;
}

interface KakaoLoginData {
    accessToken: string;
    refreshToken: string;
    grantType: string;
    expiresIn: number;
}

export type KakaoLoginResponse = LoginApiResponseFormat<KakaoLoginData>;
export type useKakaoLoginQuery = UseMutationResult<KakaoLoginResponse, Error, string>;


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