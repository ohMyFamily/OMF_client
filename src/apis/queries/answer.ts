import { useMutation } from '@tanstack/react-query';
import { submitAnswer } from '../api/test';

// 답변 제출
export const useSubmitAnswerMutation = () => {
  return useMutation({
    mutationFn: submitAnswer,
    onSuccess: (data) => {
      console.log('Answer submitted successfully:', data);
    },
    onError: (error) => {
      console.error('Error submitting answer:', error);
    },
  });
};
