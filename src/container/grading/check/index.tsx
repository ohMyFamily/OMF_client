import AppBar from '@/components/common/AppBar';
import GradingCard from '@/components/common/Card/GradingCard';
import $ from './check.module.scss';
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
import Button from '@/components/common/Button';
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { useFunnelContext } from '@/hooks/useFunnel/context';

type CheckLayoutProps = {
  handleStep: (step: string) => void;
};

export type AnswerCardType = {
  id: number;
  type: string;
  title: string;
  answer: string;
};

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

export default function CheckLayout({ handleStep }: CheckLayoutProps) {
  const [mockData, setMockData] = useState([
    {
      id: 1,
      type: 'call',
      title: '어머니와 \n 언제 마지막으로 통화했나요?',
      answer: 'Label',
      state: null,
    },
    { id: 2, type: 'angel', title: '어머니는 \n 언제 태어나셨나요?', answer: 'Label', state: null },
    {
      id: 3,
      type: 'birth',
      title: '어머니는 올해 몇 번째 \n생일을 맞이하셨나요?',
      answer: 'Label',
    },
    {
      id: 4,
      type: 'music',
      title: '어머니가 \n 최근에 빠진 음악은 무엇인가요?',
      answer: 'Label',
    },
    {
      id: 5,
      type: 'hobby',
      title: '어머니가 \n 요즘 빠진 취미는 무엇인가요?',
      answer: 'Label',
    },
    {
      id: 6,
      type: 'actor',
      title: '어머니와 \n 닮은 연예인은 누구인가요?',
      answer: 'Label',
    },
    {
      id: 7,
      type: 'memory',
      title: '어머니가 제일 좋아하는 \n나와의 기억은 무엇인가요?',
      answer: 'Label',
    },
    {
      id: 8,
      type: 'music',
      title: '어머니가 \n 최근에 빠진 음악은 무엇인가요?',
      answer: 'Label',
    },
    {
      id: 9,
      type: 'wish',
      title: '어머니가 \n 가장 이루고 싶은 소원은 무엇일까요?',
      answer: 'Label',
    },
    {
      id: 10,
      type: 'think',
      title: '어머니가 생각하는\n현재 나의 모습은 어떨까요?',
      answer: 'Label',
    },
  ] as AnswerCardType[]);

  const { data } = useFunnelContext();
  const [answerState, setAnswerState] = data['answer'];

  const onClickLeftButton = () => {
    handleStep('가이드');
  };

  const onClickCompleteButton = () => {
    handleStep('완료');
  };

  const complete = useMemo(() => {
    const array = answerState as (boolean | null)[];
    return array.some((item) => item === null);
  }, [answerState]);

  return (
    <div className={$.layout}>
      <AppBar leftRole="back" onClickLeftButton={onClickLeftButton} />
      <div className={$.AnswerList}>
        {mockData.map((item, index) => {
          return (
            <GradingCard
              title={item.title}
              cardImage={emoje[item.type as keyof typeof emoje]}
              cardNumber={item.id}
              answer={item.answer}
              state={answerState as (boolean | null)[]}
              setState={setAnswerState as Dispatch<SetStateAction<(boolean | null)[]>>}
              index={index}
              key={item.id}
            />
          );
        })}
      </div>
      <div className={$.nextButton}>
        <Button variant="secondary" onClick={onClickCompleteButton} disabled={complete}>
          채점 완료
        </Button>
      </div>
    </div>
  );
}
