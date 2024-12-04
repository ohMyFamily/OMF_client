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
import TestCompletedLayout from '@/container/test/done';
import { useGetQuestionMutation } from '@/apis/queries/question';
import { useSubmitAnswerMutation } from '@/apis/queries/answer';

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
  const [answers, setAnswers] = useState<(string | number)[]>([]);

  const { mutate: getQuestions } = useGetQuestionMutation();
  const { mutate: submitAnswer } = useSubmitAnswerMutation();

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
      getQuestions(nickname, {
        onSuccess: (data) => {
          setQuestions(data);
        },
      });
    }
  }, [nickname, getQuestions]);

  // 가족 타입 선택 시 1,2,3으로 서버에 전송
  // 어머니: 1
  // 아버지: 2
  // 다른 가족: 3

  const getFamilyTypeId = (type: string): number => {
    const types = {
      mom: 1,
      dad: 2,
      others: 3,
    };
    return types[type as keyof typeof types] || 1;
  };

  const handleAnswerSubmit = (answer: string | number | undefined) => {
    if (answer !== undefined) {
      setAnswers((prev) => [...prev, answer]);
    }
    handleNext();
  };

  const handleBonusComplete = (answer: string | number | undefined) => {
    if (answer !== undefined) {
      const finalAnswers = [...answers, answer];
      const payload = {
        id: getFamilyTypeId(selectedType),
        name: nickname,
        answer: finalAnswers,
      };
      submitAnswer(payload);
    } else {
      const payload = {
        id: getFamilyTypeId(selectedType),
        name: nickname,
        answer: answers,
      };
      submitAnswer(payload);
    }
    handleStep('완료');
  };

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
            onSubmitAnswer={
              questions[currentQuestionIndex].type === 'upload'
                ? handleBonusComplete
                : handleAnswerSubmit
            }
            nickname={nickname}
            handleStep={handleStep}
          />
        ) : null}
      </Funnel.Steps>
      <Funnel.Steps name="완료">
        <TestCompletedLayout nickname={nickname} />
      </Funnel.Steps>
    </Funnel>
  );
}

export default Test;
