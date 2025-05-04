import { useSuspenseQuery } from '@tanstack/react-query';
import { ScoreDetailType, ScoreType } from '../api/score.type';
import { getQuizCheckStatus, getQuizGradedAnswers, getScoreDetail, getScoreList } from '../api/score';
import { AnswerResponseData, QuestionResponseData } from '../api/test.types';
import { ApiResponseFormat } from '../api/api.types';

// 채점 점수 리스트 조회
export const useScoreList = () => {
  const { data } = useSuspenseQuery<ScoreType[]>({
    queryKey: ['scoreList'],
    queryFn: async () => {
      const response = await getScoreList();
      return response.data.data;
    },
    staleTime: 5 * 60 * 1000
  });
  return data;
};

// 채점 결과 상세 조회
export const useScoreDetail = (quizid: string) => {
  const { data } = useSuspenseQuery<ScoreDetailType>({
    queryKey: ['scoreDetail', quizid],
    queryFn: async () => {
      const response = await getScoreDetail(quizid);
      return response.data.data;
    },
    staleTime: 5 * 60 * 1000,
  });
  
  return data;
};


// 퀴즈 채점 여부 조회
export const useQuizCheckStatus = (quizid: string) => {
  return useSuspenseQuery<boolean>({
    queryKey: ['quizCheckStatus', quizid],
    queryFn: async () => {
      const response = await getQuizCheckStatus(quizid);
      return response.data.data;
    },
    staleTime: 5 * 60 * 1000,
  });
   
};

// 퀴즈 채점 내용 조회
export const useQuizGradedAnswers = (quizid: string) => {
  return useSuspenseQuery({
    queryKey: ['quizGradedAnswers', quizid],
    queryFn: () => getQuizGradedAnswers(quizid),
    staleTime: 5 * 60 * 1000, 
  });
   
};