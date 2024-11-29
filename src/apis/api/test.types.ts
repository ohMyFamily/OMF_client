import { UseMutationResult } from '@tanstack/react-query';
import { ApiResponseFormat } from './api.types';

export interface NicknameData {
  nickname: string;
}

export type NicknameResponse = ApiResponseFormat<NicknameData>;
export type useNicknameMutation = UseMutationResult<NicknameResponse, Error, string>;
