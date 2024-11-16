import { instance } from '../instance';
import { setAuthToken } from '../instance';

interface KakaoLoginResponse {
    isSuccess: boolean;
    code: string;
    message: string;
    data: {
        accessToken: string;
        refreshToken: string;
        grantType: string;
        expiresIn: number;
    };
}

interface KakaoLoginRequest {
    authorizationCode: string;
}

export const kakaoLogin = async (code: string): Promise<KakaoLoginResponse> => {
    try {
        const requestData: KakaoLoginRequest = {
            authorizationCode: code
        };

        const response = await instance.post<KakaoLoginResponse>(
            '/api/v1/member/kakao',
            requestData 
        );
        setAuthToken(response.data.data.accessToken);

        return response.data;
    } catch (error) {
        console.error('Kakao login failed:', error);
        throw error;
    }
};