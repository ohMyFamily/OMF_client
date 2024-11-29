import { UseMutationResult } from '@tanstack/react-query';
import { ApiResponseFormat } from './api.types';

interface KakaoLoginData {
  accessToken: string;
  refreshToken: string;
  grantType: string;
  expiresIn: number;
}

export type KakaoLoginResponse = ApiResponseFormat<KakaoLoginData>;
export type useKakaoLoginQuery = UseMutationResult<KakaoLoginResponse, Error, string>;
