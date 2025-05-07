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
import { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from 'react';
import { useGetChildAnswer, useSubmitGrading } from '@/apis/queries/answer';
import { useParams } from 'react-router-dom';

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

export default function CheckLayout({ handleStep, setHasImage, setImageUrl }: CheckLayoutProps) {
  const [answerList, setAnswerList] = useState<(boolean | null)[]>(Array(10).fill(null));
  const { quizid } = useParams();
  const mainRef = useRef<HTMLDivElement | null>(null);

  const { answers, imageUrl } = useGetChildAnswer(String(quizid));
  useEffect(() => {
    setHasImage(!!imageUrl);
    if (imageUrl) {
      setImageUrl(imageUrl);
      console.log(imageUrl);
    }
  }, [imageUrl, setHasImage, setImageUrl]);

  const onSuccessSubmitGrade = () => {
    console.log('채점 성공');
    handleStep('완료');
  };

  const onErrorSubmitGrade = () => {
    console.log('채점 실패');
  };

  const { mutate: submitGrade } = useSubmitGrading(onSuccessSubmitGrade, onErrorSubmitGrade);

  const onClickLeftButton = () => {
    handleStep('가이드');
  };

  const onClickCompleteButton = () => {
    const apiResult = [...(answerList as boolean[])].map((item, index) => ({
      isCorrect: item,
      id: index + 1,
    }));

    submitGrade({
      result: apiResult,
      quizid: String(quizid),
    });
  };

  const complete = useMemo(() => {
    const array = answerList as (boolean | null)[];
    return array.some((item) => item === null);
  }, [answerList]);

  return (
    <div className={$.layout}>
      <AppBar leftRole="back" onClickLeftButton={onClickLeftButton} />
      <div className={$.main} ref={mainRef}>
        <div className={$.AnswerList}>
          {answers.map((item, index) => {
            // 마지막 문제 스크롤 x
            const isLastCard = index === answers.length - 1;
            return (
              <GradingCard
                title={item.title}
                cardImage={emoje[item.icon as keyof typeof emoje]}
                cardNumber={item.id}
                answer={item.answer}
                state={answerList as (boolean | null)[]}
                setState={setAnswerList as Dispatch<SetStateAction<(boolean | null)[]>>}
                index={index}
                key={item.id}
                canEdit={true}
                mainRef={mainRef}
                isLastCard={isLastCard}
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
    </div>
  );
}