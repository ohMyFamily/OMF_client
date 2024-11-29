import { instance } from '../instance';
import { Storage } from '@/storage';
import { NicknameData, NicknameResponse } from './test.types';

export const sendNickname = async (nickname: string): Promise<NicknameResponse> => {
  const token = Storage.getItem('accessToken');
  console.log('Access Token:', token);

  const requestData: NicknameData = {
    nickname: nickname,
  };
  const response = await instance.post('api/v1/quiz/nickname', requestData, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};
