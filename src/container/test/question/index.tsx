import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import $ from './question.module.scss';
import AppBar from '@/components/common/AppBar';
import { Title2 } from '@/components/common/Typography';
import Inputfield from '@/components/common/Input/Inputfield';
import Button from '@/components/common/Button';
import { BonusStage } from '../bonus';
import { useGetQuestion } from '@/apis/queries/question';
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
import { useSubmitAnswerMutation } from '@/apis/queries/answer';

interface QuestionLayoutProps {
  handleStep: (step: string) => void;
  name: string;
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

function QuestionLayout({ handleStep, name }: QuestionLayoutProps) {
  const [answer, setAnswer] = useState('');
  const { data } = useGetQuestion(name);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [result, setResult] = useState<(string | number)[]>([]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const successSubmitAnswer = () => {};

  const failSubmitAnswer = () => {};

  const { mutate: submitAnswer } = useSubmitAnswerMutation(successSubmitAnswer, failSubmitAnswer);

  const disabled = useMemo(() => {
    return answer.trim().length === 0;
  }, [answer]);

  //이전 단계로 이동버튼
  const handleBeforeQuestion = () => {
    if (currentIndex === 0) {
      handleStep('애칭');
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  //다음 단계로 이동 버튼
  const handleNextQuestion = () => {
    setResult((prev: (string | number)[]) => [...prev, answer]);
    setAnswer('');
    setCurrentIndex(currentIndex + 1);
  };

  //답안 제출 버튼
  const onSubmitAnswer = () => {
    const formData = new FormData();
    formData.append('image', selectedImage as Blob);
    formData.append('name', name);
    formData.append('answer', result as unknown as Blob);
    submitAnswer(formData);
  };

  //답 입력 버튼
  const handleSelectAnswer = (answer: string | number) => {
    setResult((prev: (string | number)[]) => [...prev, answer]);
    setCurrentIndex(currentIndex + 1);
  };

  // 이미지 업로드 문제
  if (data[currentIndex].type === 'upload') {
    return (
      <div className={classNames($.Wrapper)}>
        <AppBar leftRole="back" onClickLeftButton={handleBeforeQuestion} />
        <BonusStage
          content={data[currentIndex].content}
          title={data[currentIndex].title}
          nickname={name}
          handleStep={handleStep}
          onSubmit={onSubmitAnswer}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
    );
  }

  return (
    <div className={classNames($.Wrapper)}>
      <AppBar leftRole="back" onClickLeftButton={handleBeforeQuestion} />
      <div className={classNames($.Container)}>
        <div className={classNames($.ContentWrapper)}>
          <img src={emoje[data[currentIndex].icon as keyof typeof emoje]} alt="아이콘" />
          <Title2>{data[currentIndex].title}</Title2>
          {(data[currentIndex].type === 'input' || data[currentIndex].type === 'number') && (
            <Inputfield text={answer} setText={setAnswer} label={data[currentIndex].content} />
          )}
          {data[currentIndex].type === 'select' && (
            <div className={$.buttonLayout}>
              {typeof data[currentIndex].content !== 'string' &&
                data[currentIndex].content.map((item, index) => (
                  <Button key={index} variant="primary" onClick={() => handleSelectAnswer(item)}>
                    {item}
                  </Button>
                ))}
            </div>
          )}
        </div>
        {(data[currentIndex].type === 'input' || data[currentIndex].type === 'number') && (
          <Button variant="secondary" onClick={handleNextQuestion} disabled={disabled}>
            다음 문제 ({data[currentIndex].id}/10)
          </Button>
        )}
      </div>
    </div>
  );
}

export default QuestionLayout;
