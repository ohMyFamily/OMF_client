import {useSuspenseQuery } from '@tanstack/react-query';
import { getQuestion } from '../api/test'; 

// 문제 호출
export const useGetQuestion = (nickname: string) => {
  
  const getQuestionFn = () => getQuestion(nickname)
  
  return useSuspenseQuery({
    queryKey: ['questions', nickname],
    queryFn: getQuestionFn, 
    staleTime: 5 * 60 * 1000,
  });
};
