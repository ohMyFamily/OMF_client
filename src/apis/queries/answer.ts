import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { getAnswer, submitAnswer, submitGrade } from '../api/test';

// 자식 답변 제출
export const useSubmitAnswerMutation = (onSuccess: () => void, onError: () => void) => {
  return useMutation({
    mutationFn: submitAnswer,
    onSuccess,
    onError,
  });
};

//자식 답변 조회 
export const useGetChildAnswer = (nickname: string, childId: number) => {
  
  const getChildAnswerFn = () => getAnswer(nickname, childId);
  
  return useSuspenseQuery({
    queryKey: ['answer', nickname, childId],
    queryFn: getChildAnswerFn, 
    staleTime: 5 * 60 * 1000
  });
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