import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import $ from './question.module.scss';
import AppBar from '@/components/common/AppBar';
import { Title2 } from '@/components/common/Typography';
import TextareaField from '@/components/common/Textarea/textareaField';
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
import { SubmitAnswerResponse } from '@/apis/api/test.types';
import { uploadImage } from '@/apis/api/test';

interface QuestionLayoutProps {
  handleStep: (step: string) => void;
  name: string;
  familyType: string;
  setQuizid: (quizid: number) => void;
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

function QuestionLayout({ handleStep, name, familyType, setQuizid }: QuestionLayoutProps) {
  const [answer, setAnswer] = useState('');
  const { data } = useGetQuestion(name, familyType);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [result, setResult] = useState<(string | number)[]>([]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const successSubmitAnswer = (response: SubmitAnswerResponse) => {
    const { quizid } = response.data;
    handleStep('완료');
    setQuizid(quizid);
  };

  const failSubmitAnswer = () => {};

  const { mutate: submitAnswer } = useSubmitAnswerMutation(successSubmitAnswer, failSubmitAnswer);

  const disabled = useMemo(() => {
    return answer.trim().length === 0;
  }, [answer]);

  // 인덱스가 바뀔 때 result[currentIndex] 체크해서 답변한 게 있으면 답변한 내용 보여주고, 없으면 ''
  useEffect(() => {
    if (result[currentIndex]) {
      setAnswer(result[currentIndex].toString());
    } else {
      setAnswer('');
    }
  }, [currentIndex, result]);

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
    setResult((prev: (string | number)[]) => {
      const newResult = [...prev];
      newResult[currentIndex] = answer;
      return newResult;
    });
    setAnswer('');
    setCurrentIndex(currentIndex + 1);
  };

  //답안 제출 버튼
  const onSubmitAnswer = async () => {
    let image;
    if (selectedImage) {
      const imageResponse = await uploadImage(selectedImage);
      image = imageResponse.data;
    }
      submitAnswer({
      name,
      answer: result,
      image 
    });
  };

  //답 입력 버튼
  const handleSelectAnswer = (answer: string | number) => {
    setResult((prev: (string | number)[]) => [...prev, answer]);
    setCurrentIndex(currentIndex + 1);
  };

  // 이미지 업로드 문제
  if (data[currentIndex].type === 'upload') {
    return (
      <div className={classNames($.BonusStageWrapper)}>
        <AppBar leftRole="back" onClickLeftButton={handleBeforeQuestion} />
        <div className={classNames($.BonusStageContainer)}>
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
          {(data[currentIndex].type === 'input' || data[currentIndex].type === 'date') && (
            <TextareaField
              text={answer}
              setText={setAnswer}
              label={data[currentIndex].content}
              inputMode="text"
            />
          )}
          {data[currentIndex].type === 'number' && (
            <TextareaField
              text={answer}
              setText={setAnswer}
              label={data[currentIndex].content}
              inputMode="numeric"
            />
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
        {(data[currentIndex].type === 'input' ||
          data[currentIndex].type === 'number' ||
          data[currentIndex].type === 'date') && (
          <Button variant="secondary" onClick={handleNextQuestion} disabled={disabled}>
            다음 문제 ({data[currentIndex].id}/10)
          </Button>
        )}
      </div>
    </div>
  );
}

export default QuestionLayout;
