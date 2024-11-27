import Question from '@/container/test/question';
import { useState } from 'react';
import {
  Actor,
  Angel,
  Birth,
  Call,
  Food,
  Hobby,
  Memory,
  Music,
  Think,
  Wish,
} from '@/components/common/TossFace';

export interface QuestionType {
  id: number;
  type: 'input' | 'select';
  content: string[] | string;
  title: string;
  icon: string;
}

const emoje = {
  call: Call,
  actor: Actor,
  angel: Angel,
  birth: Birth,
  food: Food,
  hobby: Hobby,
  memory: Memory,
  music: Music,
  wish: Wish,
  think: Think,
};

function Test() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [mockData, setMockData] = useState<QuestionType[]>([
    {
      id: 1,
      type: 'select',
      title: '어머니와 \n 언제 마지막으로 통화했나요?',
      content: ['오늘', '지난 주', '지난 달', '전화 자주 할게요 죄송해요 사랑해요❤️'],
      icon: 'call',
    },
    {
      id: 2,
      type: 'input',
      title: '어머니는 \n 언제 태어나셨나요?',
      content: '이거 모르면 진짜 반성해야 댑니다.',
      icon: 'angel',
    },
    {
      id: 3,
      type: 'input',
      title: '어머니는 \n 올해 몇 번째 생일을 맞이하셨나요?',
      content: '사과해요 나한테액!',
      icon: 'birth',
    },
    {
      id: 4,
      type: 'input',
      title: '어머니가 \n 최근에 빠진 음악은 무엇인가요?',
      content: '어머니의 급상승차트',
      icon: 'music',
    },
    {
      id: 5,
      type: 'input',
      title: '어머니가 \n 요즘 빠진 취미는 무엇인가요?',
      content: '어머니의 급상승차트',
      icon: 'hobby',
    },
    {
      id: 6,
      type: 'input',
      title: '어머니와 \n 닮은 연예인은 누구인가요?',
      content: '어머니의 급상승차트',
      icon: 'actor',
    },
    {
      id: 7,
      type: 'input',
      title: '어머니가 제일 좋아하는 \n 나와의 기억은 무엇인가요?',
      content: '어머니의 급상승차트',
      icon: 'memory',
    },
    {
      id: 8,
      type: 'input',
      title: '어머니가 \n 최근에 빠진 음악은 무엇인가요?',
      content: '어머니의 급상승차트',
      icon: 'music',
    },
    {
      id: 9,
      type: 'input',
      title: '어머니가 \n 가장 이루고 싶은 소원은 무엇일까요?',
      content: '어머니의 급상승차트',
      icon: 'wish',
    },
    {
      id: 10,
      type: 'input',
      title: '어머니가 생각하는\n현재 나의 모습은 어떨까요?',
      content: '어머니의 급상승차트',
      icon: 'think',
    },
  ]);

  const handleNext = () => {
    if (currentQuestionIndex < mockData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const currentQuestion = mockData[currentQuestionIndex];

  return (
    <Question
      key={currentQuestion.id}
      id={currentQuestion.id}
      type={currentQuestion.type}
      title={currentQuestion.title}
      content={currentQuestion.content}
      icon={emoje[currentQuestion.icon as keyof typeof emoje]}
      onNext={handleNext}
      onBack={handleBack}
    />
  );
}

export default Test;
