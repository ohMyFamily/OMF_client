import AppBar from '@/components/common/AppBar';
import GradingCard from '@/components/common/Card/GradingCard';
import $ from './checked.module.scss';
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
import { Dispatch, SetStateAction, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useQuizGradedAnswers } from '@/apis/queries/score';
import { QuestionResponseData } from '@/apis/api/test.types';
import { Body3, Title2 } from '@/components/common/Typography';

type CheckLayoutProps = {
  handleStep: (step: string) => void;
  setHasImage: Dispatch<SetStateAction<boolean>>;
  setImageUrl: Dispatch<SetStateAction<string>>;
};

export type AnswerCardType = {
  id: number;
  icon: string;
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

export default function CheckedLayout({ handleStep }: CheckLayoutProps) {
  const { quizid } = useParams();
  const { data: answers } = useQuizGradedAnswers(Number(quizid));
  
  const onClickLeftButton = () => {
    handleStep('메인');
  };

  const answerList = useMemo(() => {
    return answers.data.map((item: QuestionResponseData) => item.isAnswer);
  }, [answers])

  return (
    <div className={$.layout}>
      <AppBar leftRole="back" onClickLeftButton={onClickLeftButton} />
      <div className={$.container}>
        <div className={$.textWrapper}>
          <Title2>이미 채점한 답안지예요!</Title2>
          <Body3>
            새로 채점을 할 순 없지만
            <br />
            어떻게 채점하셨는지 보여드릴게요.
            <br />
            한데 모여 답안지를 보면서 얘기나누면 더 좋을 것 같아요!
          </Body3>
        </div>
          <div className={$.AnswerList}>
            {answers &&
              answers.data.slice(0, 10).map((item: QuestionResponseData, index: number) => {
                return (
                  <GradingCard
                    title={item.title}
                    cardImage={emoje[item.icon as keyof typeof emoje]}
                    cardNumber={index + 1}
                    answer={item.answer}
                    state={answerList as (boolean | null)[]}
                    setState={answerList as Dispatch<SetStateAction<(boolean | null)[]>>}
                    index={index}
                    key={item.id}
                    canEdit={false}
                  />
                );
              })}
          </div>
        </div>
    </div>
  );
}
