import classNames from 'classnames';
import $ from '@/components/common/Textarea/textarea.module.scss';
import Textarea from '.';
import { Body3, Button2 } from '@/components/common/Typography';
import { Dispatch, SetStateAction } from 'react';
import { nicknameExamples } from '@/constants/business.constants';

interface TextareaFieldProps {
  label?: string | React.ReactNode;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  maxLength?: number;
  inputMode?: 'text' | 'numeric';
  nameExamples?: 'mom' | 'dad' | 'others';
}

function TextareaField({ label, text, setText, maxLength, inputMode, nameExamples }: TextareaFieldProps) {

  const currentExamples = nameExamples ? nicknameExamples[nameExamples] : [];

  return (
    <div className={classNames($.fieldWrapper)}>
      <div>
        {label && (
          <div className={classNames($.label)}>
            <Body3>{label}</Body3>
          </div>
        )}
        <Textarea 
          text={text} 
          setText={setText} 
          maxLength={maxLength} 
          inputMode={inputMode}
        />
        {nameExamples && (
          <div className={classNames($.namesWrapper)}>
            <Body3>추천 애칭</Body3>
            <div className={classNames($.exampleButtonsWrapper)}>
              {currentExamples.map((example, index) => (
                <div
                  key={index}
                  onClick={() => setText(example)}
                  className={classNames($.exampleButton)}
                >
                  <Button2>{example}</Button2>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TextareaField;
