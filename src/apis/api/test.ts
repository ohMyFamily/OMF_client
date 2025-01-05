import { instance } from '../instance'; 
import {
  GradingPayloadType,
  QuestionResponseData,
  SubmitAnswerPayload,  
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
export const submitAnswer = async (payload: SubmitAnswerPayload) => {
  const { data } = await instance.post('api/submit', payload);
  return data;
};


// 이미지 업로드 api
export const uploadImage = async (image: File) => {
  const formData = new FormData();
  formData.append('image', image);
  const { data } = await instance.patch('api/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return data;
};

 // 답변 조회
export const getAnswer = async(quizid: number): Promise<QuestionResponseData[]> => {
  const {data} = await instance.get('api/answer', {
    params: {quizid}
  }); 
  return data.data.data;
} 

 // 채점하기
export const submitGrade = async(payload: GradingPayloadType) => {
  const {data} = await instance.post('api/score', payload);

  return data;
}