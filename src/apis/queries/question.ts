import { useMutation } from '@tanstack/react-query';
import { getQuestion, sendNickname } from '../api/test';

// 애칭 설정
export const useNicknameMutation = () => {
  return useMutation({
    mutationFn: sendNickname,
    onSuccess: (data) => {
      console.log('Nickname sent successfully:', data);
    },
    onError: (error) => {
      console.error('Error sending nickname:', error);
    },
  });
};

// 문제 호출
export const useGetQuestionMutation = () => {
  return useMutation({
    mutationFn: getQuestion,
    onError: (error) => {
      console.error('Error receiving question:', error);
    },
  });
};
