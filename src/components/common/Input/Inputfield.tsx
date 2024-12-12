import classNames from 'classnames';
import $ from '@/components/common/Input/Input.module.scss';
import Input from '.';
import { Body2 } from '@/components/common/Typography';
import { Dispatch, SetStateAction } from 'react';

interface InputFieldProps {
  label?: string | React.ReactNode;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  maxLength?: number;
}

function Inputfield({ label, text, setText, maxLength }: InputFieldProps) {
  return (
    <div className={classNames($.fieldWrapper)}>
      <div>
        <div className={classNames($.label)}>{label && <Body2>{label}</Body2>}</div>
        <Input text={text} setText={setText} maxLength={maxLength} />
      </div>
    </div>
  );
}

export default Inputfield;
