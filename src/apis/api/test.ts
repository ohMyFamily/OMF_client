import { instance } from '../instance'; 
import {
  GradingPayloadType,
  QuestionResponseData,  
} from './test.types'; 
 

// 문제 호출 api
export const getQuestion = async (nickname: string): Promise<QuestionResponseData[]> => {
   const { data } = await instance.get('api/question', {
    params: { name: nickname },
  });

  return data.data;
};

// 답변 제출 api
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const submitAnswer = async (payload: any) => {
  const {data} = await instance.post('api/submit', payload, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return data;
};

export const getAnswer = async(name: string, childId: number):  Promise<QuestionResponseData[]> => {
  const {data} = await instance.get('api/answer', {
    params: {name, childId}
  }); 

  return data.data.data;
} 

 
export const submitGrade = async(payload: GradingPayloadType) => {
  const {data} = await instance.post('api/score', payload);

  return data;
}