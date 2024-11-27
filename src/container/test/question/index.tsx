import { useMemo, useState } from 'react';
import classNames from 'classnames';
import $ from './question.module.scss';
import AppBar from '@/components/common/AppBar';
import { Title2 } from '@/components/common/Typography';
import Inputfield from '@/components/common/Input/Inputfield';
import Button from '@/components/common/Button';
import { QuestionType } from '@/pages/test';

function Question({
  id,
  type,
  content,
  title,
  icon,
  onNext,
  onBack,
}: QuestionType & {
  onNext: () => void;
  onBack: () => void;
}) {
  const [text, setText] = useState('');

  const disabled = useMemo(() => {
    return text.trim().length === 0;
  }, [text]);

  const handleNext = () => {
    onNext();
    setText('');
  };

  return (
    <div className={classNames($.Wrapper)}>
      <AppBar leftRole="back" onClickLeftButton={onBack} />
      <div className={classNames($.Container)}>
        <div className={classNames($.ContentWrapper)}>
          <img src={icon} alt="아이콘" />
          <Title2>{title}</Title2>
          {type === 'input' && <Inputfield text={text} setText={setText} label={content} />}
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
          <Button variant="tertiary" onClick={handleNext} disabled={disabled}>
            다음 문제 ({id}/10)
          </Button>
        )}
      </div>
    </div>
  );
}

export default Question;
