import { useMutation } from '@tanstack/react-query';
import { getQuestion, sendNickname } from '../api/test';

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

export const useGetQuestionMutation = () => {
  return useMutation({
    mutationFn: getQuestion,
    onError: (error) => {
      console.error('Error receiving question:', error);
    },
  });
};
