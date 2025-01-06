import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { getAnswer, submitAnswer, submitGrade, uploadImage } from '../api/test';
import { SubmitAnswerResponse } from '../api/test.types';

// 자식 답변 제출
export const useSubmitAnswerMutation = (onSuccess: (data: SubmitAnswerResponse) => void, onError: () => void) => {
  return useMutation({
    mutationFn: submitAnswer,
    onSuccess,
    onError,
  });
 };

// 이미지 업로드 
export const useUploadImageMutation = () => {
  return useMutation({
    mutationFn: uploadImage,
    onError: (error) => {
      console.log('이미지 업로드 실패');
    }
  });
};

//답변 조회
export const useGetChildAnswer = (quizid: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ['answer', quizid],
    queryFn: () => getAnswer(quizid),
    staleTime: 5 * 60 * 1000
  });
  
  return {
    answers: data.data.data,
    imageUrl: data.data.image
  };
};

//부모 채점 
export const useSubmitGrading = (
  onSuccess?: () => void,
  onError?: () => void
) => {
  return useMutation({
    mutationFn: submitGrade,
    onSuccess: (data) => {
      console.log('채점 성공');
      onSuccess?.();
    },
    onError: (error) => {
      console.log('채점 실패');
      onError?.();
    }
  })
}