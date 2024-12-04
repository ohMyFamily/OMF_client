import { instance } from '../instance'; 
import {
  QuestionResponseData,  
} from './test.types'; 
 

// 문제 호출 api
export const getQuestion = async (nickname: string): Promise<QuestionResponseData[]> => {
   const { data } = await instance.get('api/question', {
    params: { name: nickname },
  });

  return data;
};

// 답변 제출 api
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const submitAnswer = async (data: any) => {
  const response = await instance.post('api/submit', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};
