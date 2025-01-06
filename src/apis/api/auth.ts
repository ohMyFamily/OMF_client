import { instance } from '../instance';
import { KakaoLoginResponse } from './auth.types';

export const kakaoLogin = async (code: string): Promise<KakaoLoginResponse> => {
    const response = await instance.post('/api/v1/member/kakao', {
        authorizationCode: code
    });
    return response.data;
};

export const getUserInfo = async() => {
    const {data} = await instance.get('api/v1/member');

    return data;
}

// 채점 페이지에서 카카오이름, 애칭 정보 가져오기
export const getUserNames = async (quizid: number) => {
    const { data } = await instance.get(`/api/user`, {
        params: {
            quizid: quizid
        }
    });
    return data;
};