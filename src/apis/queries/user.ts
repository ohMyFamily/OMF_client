import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '@/apis/instance';
import { getUserInfo, kakaoLogin } from '../api/auth';


export const useKakaoLoginQuery = () => {
    const navigate = useNavigate();
    
    return useMutation({
    mutationFn: kakaoLogin,
    onSuccess: (data) => {
        setAuthToken(data.data.accessToken, data.data.refreshToken);
        navigate('/');
    },
    onError: () => navigate('/login')
    });
};

export const useGetUserInfo = () => {
    return useQuery({
        queryKey: ['userInfo'],
        queryFn: getUserInfo,
        select: (response) => response.data
    })
}