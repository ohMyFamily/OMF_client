import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { changeName, getAnswer, submitAnswer, submitGrade, uploadImage } from '../api/test';

// 자식 답변 제출
export const useSubmitAnswerMutation = () => {
  return useMutation({
    mutationFn: submitAnswer,
  });
};

// 이미지 업로드
export const useUploadImageMutation = () => {
  return useMutation({
    mutationFn: uploadImage,
    onError: (error) => {
      console.log('이미지 업로드 실패');
    },
  });
};

// 이름 변경
export const useChangeNameMutation = (onSuccess?: () => void, onError?: () => void) => {
  return useMutation({
    mutationFn: changeName,
    onSuccess: (data) => {
      console.log('이름 변경 성공');
      onSuccess?.();
    },
    onError: (error) => {
      console.log('이름 변경 실패');
      onError?.();
    },
  });
};

//답변 조회
export const useGetChildAnswer = (quizid: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['answer', quizid],
    queryFn: () => getAnswer(quizid),
    staleTime: 5 * 60 * 1000,
  });

  return {
    answers: data.data.data,
    imageUrl: data.data.image,
  };
};

//부모 채점
export const useSubmitGrading = (onSuccess?: () => void, onError?: () => void) => {
  return useMutation({
    mutationFn: submitGrade,
    onSuccess: (data) => {
      console.log('채점 성공');
      onSuccess?.();
    },
    onError: (error) => {
      console.log('채점 실패');
      onError?.();
    },
  });
};
