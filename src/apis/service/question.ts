import { QuestionResponseData } from '../api/test.types';

export interface RawQuestion {
  id: number;
  type: string;
  title: string;
  content: string | string[];
  icon: string;
}

export const questionService = {
  getQuestionList: (rawResponse: RawQuestion[]) => {
    return rawResponse.map(({ id, type, title, content, icon }) => ({
      id,
      type: type as QuestionResponseData['type'],
      title,
      content,
      icon,
    }));
  },
};
