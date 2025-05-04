import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '@/apis/instance';
import { getUserInfo, getUserNames, kakaoLogin } from '../api/auth';


export const useKakaoLoginQuery = () => {
    const navigate = useNavigate();
    
    return useMutation({
    mutationFn: kakaoLogin,
    onSuccess: (data) => {
        setAuthToken(data.data.accessToken, data.data.refreshToken);
        navigate('/main');
    },
    onError: () => navigate('/login')
    });
};

export const useGetUserInfo = () => {
    return useQuery({
        queryKey: ['userInfo'],
        queryFn: getUserInfo,
        select: (response) => response.data,
        enabled: false
    })
}

export const useGetUserNames = (quizid: number) => {
    const { data } = useSuspenseQuery({
      queryKey: ['userNames', quizid],
      queryFn: () => getUserNames(quizid),
      staleTime: 5 * 60 * 1000
    });
    return data.data;
  };

