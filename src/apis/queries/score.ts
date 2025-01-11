import { useSuspenseQuery } from '@tanstack/react-query';
import { ScoreDetailType, ScoreType } from '../api/score.type';
import { getScoreDetail, getScoreList } from '../api/score';

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
export const useScoreDetail = (quizid: number) => {
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