import { instance } from '../instance';
import { ApiResponseFormat } from './api.types';
import { ScoreDetailResponse, ScoreType } from './score.type';
import { AnswerResponseData } from './test.types';

// 채점 점수 리스트 조회
export const getScoreList = () => {
  return instance.get<ApiResponseFormat<ScoreType[]>>('/api/v1/quiz/search');
};

// 점수 상세 페이지 조회
export const getScoreDetail = (quizid: string) => {
  return instance.get<ApiResponseFormat<ScoreDetailResponse>>(`/api/search/detail?quizid=${quizid}`);
};

// 퀴즈 채점 여부 조회
export const getQuizCheckStatus = (quizid: number) => {
  return instance.get<ApiResponseFormat<boolean>>(`/api/v1/quiz/check/${quizid}`);
};


// 채점한 답변 조회
export const getQuizGradedAnswers = async (quizid: number) => {
  const { data } = await instance.get(`/api/v1/quiz/check/answer/${quizid}`);
  return data;
};