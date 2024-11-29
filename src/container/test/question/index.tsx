import { useMemo, useState } from 'react';
import classNames from 'classnames';
import $ from './question.module.scss';
import AppBar from '@/components/common/AppBar';
import { Title2 } from '@/components/common/Typography';
import Inputfield from '@/components/common/Input/Inputfield';
import Button from '@/components/common/Button';
import { QuestionLayoutType } from '@/pages/test';

function QuestionLayout({
  id,
  type,
  content,
  title,
  icon,
  onNext,
  onBack,
}: QuestionLayoutType & {
  onNext: () => void;
  onBack: () => void;
}) {
  const [answer, setAnswer] = useState('');

  const disabled = useMemo(() => {
    return answer.trim().length === 0;
  }, [answer]);

  const handleNext = () => {
    onNext();
    setAnswer('');
  };

  return (
    <div className={classNames($.Wrapper)}>
      <AppBar leftRole="back" onClickLeftButton={onBack} />
      <div className={classNames($.Container)}>
        <div className={classNames($.ContentWrapper)}>
          <img src={icon} alt="아이콘" />
          <Title2>{title}</Title2>
          {type === 'input' && <Inputfield text={answer} setText={setAnswer} label={content} />}
          {type === 'select' && (
            <div className={$.buttonLayout}>
              {typeof content !== 'string' &&
                content.map((item, index) => (
                  <Button key={index} variant="primary" onClick={handleNext}>
                    {item}
                  </Button>
                ))}
            </div>
          )}
        </div>
        {type === 'input' && (
          <Button variant="secondary" onClick={handleNext} disabled={disabled}>
            다음 문제 ({id}/10)
          </Button>
        )}
      </div>
    </div>
  );
}

export default QuestionLayout;
