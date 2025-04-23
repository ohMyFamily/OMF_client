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
import TextareaDateField from '@/components/common/Textarea/textareaDateField';

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
    if (data && data[currentIndex]) {
      if (data[currentIndex].type === 'date') {
        // 년,월,일이 모두 포함되어 있는지 확인
        const hasYear = answer.includes('년');
        const hasMonth = answer.includes('월');
        const hasDay = answer.includes('일');
        
        // 실제 값이 있는지 확인
        const parts = answer.split(' ');
        const yearPart = parts[0] || '';
        const monthPart = parts[1] || '';
        const dayPart = parts[2] || '';
        
        const yearEmpty = yearPart.replace('년', '').trim().length === 0;
        const monthEmpty = monthPart.replace('월', '').trim().length === 0;
        const dayEmpty = dayPart.replace('일', '').trim().length === 0;
        
        // 모든 조건이 충족되어야 버튼 활성화
        return !hasYear || !hasMonth || !hasDay || yearEmpty || monthEmpty || dayEmpty;
      }
      return answer.trim().length === 0;
    }
    return true;
  }, [answer, currentIndex, data]);

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
    setResult((prev: (string | number)[]) => {
      const newResult = [...prev];
      newResult[currentIndex] = answer;
      return newResult;
    });
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
          {/* radio 선택지형 (1번) */}
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
          {/* 날짜입력형 (2번) */}
          {data[currentIndex].type === 'date' && (
            <TextareaDateField
              text={answer}
              setText={setAnswer}
              inputMode="numeric"
            />
          )}
          {/* 숫자입력형 (3번) */}
          {data[currentIndex].type === 'number' && (
            <TextareaField
              text={answer}
              setText={setAnswer}
              label={data[currentIndex].content}
              inputMode="numeric"
              buttonType="clear"
            />
          )}
          {/* 일반텍스트형 (4-10번) */}
          {data[currentIndex].type === 'input' && (
            <TextareaField
              text={answer}
              setText={setAnswer}
              label={data[currentIndex].content}
              inputMode="text"
              buttonType="clear"
            />
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