import { instance } from '../instance';
import { Storage } from '@/storage';
import { NicknameData, NicknameResponse } from './test.types';

// 애칭 설정 api
export const sendNickname = async (nickname: string): Promise<NicknameResponse> => {
  const token = Storage.getItem('accessToken');
  console.log('Access Token:', token);

  const requestData: NicknameData = {
    nickname: nickname,
  };
  const response = await instance.post('api/v1/quiz/nickname', requestData);
  return response.data;
};
