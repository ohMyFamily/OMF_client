import { instance } from '../instance';
import { UseMutationResult } from "@tanstack/react-query";

export interface LoginApiResponseFormat<T> {
    isSuccess: boolean;
    code: string;
    message: string;
    data: T;
}

export interface KakaoLoginData {
    accessToken: string;
    refreshToken: string;
    grantType: string;
    expiresIn: number;
}

export type KakaoLoginResponse = LoginApiResponseFormat<KakaoLoginData>;
export type UseKakaoLoginMutation = UseMutationResult<KakaoLoginResponse, Error, string>;

// 카카오 로그인 api
export const kakaoLogin = async (code: string): Promise<KakaoLoginResponse> => {
    const response = await instance.post('/api/v1/member/kakao', {
        authorizationCode: code
    });
    return response.data;
};