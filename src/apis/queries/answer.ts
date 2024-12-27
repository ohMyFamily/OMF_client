import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { getAnswer, submitAnswer, submitGrade } from '../api/test';
import { SubmitAnswerResponse } from '../api/test.types';

// 자식 답변 제출
export const useSubmitAnswerMutation = (onSuccess: (data: SubmitAnswerResponse) => void, onError: () => void) => {
  return useMutation({
    mutationFn: submitAnswer,
    onSuccess,
    onError,
  });
 };


 
//자식 답변 조회 
export const useGetChildAnswer = (quizid: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ['answer', quizid],
    queryFn: () => getAnswer(quizid),
    staleTime: 5 * 60 * 1000
  });
  return data;
};

//부모 채점 
export const useSubmitGrading = () => {
  return useMutation({
    mutationFn: submitGrade,
    onSuccess: (data) => {
      console.log('채점 성공');
    },
    onError: (error) => {
      console.log('채점 실패');
    }
  })
}