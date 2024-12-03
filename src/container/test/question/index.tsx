import { useMemo, useState } from 'react';
import classNames from 'classnames';
import $ from './question.module.scss';
import AppBar from '@/components/common/AppBar';
import { Title2 } from '@/components/common/Typography';
import Inputfield from '@/components/common/Input/Inputfield';
import Button from '@/components/common/Button';
import { QuestionLayoutType } from '@/pages/test';
import { BonusStage } from '../bonus';

interface QuestionLayoutProps extends QuestionLayoutType {
  onNext: () => void;
  onBack: () => void;
  onSubmitAnswer: (answer: string | number | undefined) => void;
  nickname: string;
  handleStep: (step: string) => void;
}

function QuestionLayout({
  id,
  type,
  content,
  title,
  icon,
  onNext,
  onBack,
  onSubmitAnswer,
  nickname,
  handleStep,
}: QuestionLayoutProps) {
  const [answer, setAnswer] = useState('');

  const disabled = useMemo(() => {
    return answer.trim().length === 0;
  }, [answer]);

  const handleNext = () => {
    if (type !== 'upload') {
      onSubmitAnswer(answer);
      setAnswer('');
    } else {
      onNext();
    }
  };

  // 선택한 버튼의 문자열을 답으로 보냄
  const handleSelectAnswer = (selectedAnswer: string) => {
    onSubmitAnswer(selectedAnswer);
  };

  // 이미지 업로드 문제
  if (type === 'upload') {
    return (
      <div className={classNames($.Wrapper)}>
        <AppBar leftRole="back" onClickLeftButton={onBack} />
        <BonusStage
          content={content}
          title={title}
          nickname={nickname}
          handleStep={handleStep}
          onSubmit={onSubmitAnswer}
        />
      </div>
    );
  }

  return (
    <div className={classNames($.Wrapper)}>
      <AppBar leftRole="back" onClickLeftButton={onBack} />
      <div className={classNames($.Container)}>
        <div className={classNames($.ContentWrapper)}>
          <img src={icon} alt="아이콘" />
          <Title2>{title}</Title2>
          {(type === 'input' || type === 'number') && (
            <Inputfield text={answer} setText={setAnswer} label={content} />
          )}
          {type === 'select' && (
            <div className={$.buttonLayout}>
              {typeof content !== 'string' &&
                content.map((item, index) => (
                  <Button key={index} variant="primary" onClick={() => handleSelectAnswer(item)}>
                    {item}
                  </Button>
                ))}
            </div>
          )}
        </div>
        {(type === 'input' || type === 'number') && (
          <Button variant="secondary" onClick={handleNext} disabled={disabled}>
            다음 문제 ({id}/10)
          </Button>
        )}
      </div>
    </div>
  );
}

export default QuestionLayout;
