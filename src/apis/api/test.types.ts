import { UseMutationResult } from '@tanstack/react-query';
import { ApiResponseFormat } from './api.types';

export interface NicknameData {
  nickname: string;
}

export type NicknameResponse = ApiResponseFormat<NicknameData>;
export type useNicknameMutation = UseMutationResult<NicknameResponse, Error, string>;

//문제 호출 타입
export interface QuestionResponseData {
  id: number;
  type: 'input' | 'select' | 'number' | 'upload' | 'date';
  title: string;
  content: string | string[];
  icon: string;
  answer?: string;
}

// 답변 제출 타입
export interface SubmitAnswerData extends FormData{ 
  name: string;
  answer: (string | number)[];
}

export type SubmitAnswerResponse = ApiResponseFormat<SubmitAnswerData>;

export type GradingPayloadType = {
  result: {
    id: number;
    isCorrect: boolean;
  }[],
  nickname: string;
}