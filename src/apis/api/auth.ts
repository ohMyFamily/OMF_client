import { instance } from '../instance';
import { KakaoLoginResponse } from '../queries/user'

export const kakaoLogin = async (code: string): Promise<KakaoLoginResponse> => {
    const response = await instance.post('/api/v1/member/kakao', {
        authorizationCode: code
    });
    return response.data;
};