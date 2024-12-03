import { useState, useEffect } from 'react';
import { useFunnel } from '@/hooks/useFunnel';
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
import EnterNameLayout from '@/container/test/enterName';
import QuestionLayout from '@/container/test/question';
import SelectTypeLayout from '@/container/test/selectType';
import { useGetQuestionMutation } from '@/apis/queries/question';
import TestCompletedLayout from '@/container/test/done';

export interface QuestionLayoutType {
  id?: number;
  type?: 'input' | 'select' | 'number' | 'upload';
  content: string[] | string;
  title: string;
  icon?: string;
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
  const steps = ['선택', '애칭', '질문', '완료'];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedType, setSelectedType] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [questions, setQuestions] = useState<QuestionLayoutType[]>([]);
  const { mutate } = useGetQuestionMutation();
  const funnelData = {
    selectedType: [selectedType, setSelectedType] as [string, typeof setSelectedType],
    nickname: [nickname, setNickname] as [string, typeof setNickname],
    questionIndex: [currentQuestionIndex, setCurrentQuestionIndex] as [
      number,
      typeof setCurrentQuestionIndex
    ],
  };
  const { FunnelComponent: Funnel, handleStep } = useFunnel(steps, funnelData);

  useEffect(() => {
    if (nickname) {
      mutate(nickname, {
        onSuccess: (data) => {
          setQuestions(data);
        },
      });
    }
  }, [nickname]);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      handleStep('애칭');
    }
  };

  return (
    <Funnel>
      <Funnel.Steps name="선택">
        <SelectTypeLayout handleStep={handleStep} setSelectedType={setSelectedType} />
      </Funnel.Steps>
      <Funnel.Steps name="애칭">
        <EnterNameLayout person={selectedType} handleStep={handleStep} setNickname={setNickname} />
      </Funnel.Steps>
      <Funnel.Steps name="질문">
        {questions.length > 0 ? (
          <QuestionLayout
            key={questions[currentQuestionIndex].id}
            id={questions[currentQuestionIndex].id}
            type={questions[currentQuestionIndex].type}
            title={questions[currentQuestionIndex].title}
            content={questions[currentQuestionIndex].content}
            icon={emoje[questions[currentQuestionIndex].icon as keyof typeof emoje]}
            onNext={handleNext}
            onBack={handleBack}
            nickname={nickname}
            handleStep={handleStep}
          />
        ) : null}
      </Funnel.Steps>
      <Funnel.Steps name="완료">
        <TestCompletedLayout />
      </Funnel.Steps>
    </Funnel>
  );
}

export default Test;
