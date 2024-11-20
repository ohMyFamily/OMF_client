import { instance } from '../instance';
import { KakaoLoginResponse } from './auth.types';

export const kakaoLogin = async (code: string): Promise<KakaoLoginResponse> => {
    const response = await instance.post('/api/v1/member/kakao', {
        authorizationCode: code
    });
    return response.data;
};