import { instance } from '../instance';
import { Storage } from '@/storage';
import {
  QuestionResponseData,
  NicknameData,
  NicknameResponse,
  SubmitAnswerData,
  SubmitAnswerResponse,
} from './test.types';
import { questionService } from '../service/question';

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

// 문제 호출 api
export const getQuestion = async (nickname: string): Promise<QuestionResponseData[]> => {
  const { data } = await instance.get('api/question', {
    params: { name: nickname },
  });
  return questionService.getQuestionList(data);
};

// 답변 제출 api
export const submitAnswer = async (data: SubmitAnswerData): Promise<SubmitAnswerResponse> => {
  const response = await instance.post('api/submit', data);
  return response.data;
};
