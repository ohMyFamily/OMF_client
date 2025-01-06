import { instance } from '../instance';
import { ApiResponseFormat } from './api.types';
import { ScoreType } from './score.type';

export const getScoreList = () => {
  return instance.get<ApiResponseFormat<ScoreType[]>>('/api/v1/quiz/search');
};