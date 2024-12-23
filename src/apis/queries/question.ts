import {useSuspenseQuery } from '@tanstack/react-query';
import { getQuestion } from '../api/test'; 

// 문제 호출
export const useGetQuestion = (nickname: string, familyType: string) => {
  const getQuestionFn = () => getQuestion(nickname, familyType)
  
  return useSuspenseQuery({
    queryKey: ['questions', nickname, familyType],
    queryFn: getQuestionFn,
    staleTime: 5 * 60 * 1000,
  });
};