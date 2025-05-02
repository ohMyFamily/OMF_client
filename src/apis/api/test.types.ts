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
  isAnswer?: boolean;
}

// 답변 제출 타입
export interface SubmitAnswerPayload {
  name: string;
  answer: (string | number)[];
  image?: string;
}

// 답변 제출 타입
export interface ChangeNamePayload {
  name: string;
  quizid: number;
}

// 자식 답변 호출 타입
export interface AnswerResponseData {
  image?: string;
  data: QuestionResponseData[];
}

export interface SubmitAnswerResponse {
  data: {
    quizid: number;
  };
}

export type GradingPayloadType = {
  result: {
    id: number;
    isCorrect: boolean;
  }[];
  quizid: number;
};