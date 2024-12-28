import { instance } from '../instance'; 
import {
  GradingPayloadType,
  QuestionResponseData,  
} from './test.types'; 
 

// 문제 호출 api
export const getQuestion = async (nickname: string, familyType: string): Promise<QuestionResponseData[]> => {
  const type = familyType === 'mom' ? 1 : familyType === 'dad' ? 2 : 3;
  
  const { data } = await instance.get('api/question', {
    params: { 
      name: nickname,
      id: type 
    },
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

export const getAnswer = async(quizid: number): Promise<QuestionResponseData[]> => {
  const {data} = await instance.get('api/answer', {
    params: {quizid}
  }); 
  return data.data.data;
} 

 
export const submitGrade = async(payload: GradingPayloadType) => {
  const {data} = await instance.post('api/score', payload);

  return data;
}