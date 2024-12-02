import { useSuspenseQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { sendNickname } from '../api/test';

export const useGetSample = () => {
  const fetchFunction = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
  };

  return useSuspenseQuery({
    queryKey: ['repoData'],
    queryFn: fetchFunction,
    staleTime: 1000 * 10,
  });
};

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
