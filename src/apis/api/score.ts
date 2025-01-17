import { instance } from '../instance';
import { ApiResponseFormat } from './api.types';
import { ScoreDetailResponse, ScoreType } from './score.type';

// 채점 점수 리스트 조회
export const getScoreList = () => {
  return instance.get<ApiResponseFormat<ScoreType[]>>('/api/v1/quiz/search');
};

// 점수 상세 페이지 조회
export const getScoreDetail = (quizid: number) => {
  return instance.get<ApiResponseFormat<ScoreDetailResponse>>(`/api/search/detail?quizid=${quizid}`);
};