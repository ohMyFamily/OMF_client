import { useSuspenseQuery } from '@tanstack/react-query';
import { ScoreType } from '../api/score.type';
import { getScoreList } from '../api/score';

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