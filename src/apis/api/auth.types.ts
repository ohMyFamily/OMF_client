import { UseMutationResult } from "@tanstack/react-query";

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
