import classNames from 'classnames';
import $ from '@/components/common/Textarea/textarea.module.scss';
import Textarea from '.';
import { Body3 } from '@/components/common/Typography';
import { Dispatch, SetStateAction } from 'react';

interface TextareaFieldProps {
  label?: string | React.ReactNode;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  maxLength?: number;
  inputMode?: 'text' | 'numeric';
}

function TextareaField({ label, text, setText, maxLength, inputMode}: TextareaFieldProps) {
  return (
    <div className={classNames($.fieldWrapper)}>
      <div>
        <div className={classNames($.label)}>{label && <Body3>{label}</Body3>}</div>
        <Textarea text={text} setText={setText} maxLength={maxLength} inputMode={inputMode}/>
      </div>
    </div>
  );
}

export default TextareaField;
