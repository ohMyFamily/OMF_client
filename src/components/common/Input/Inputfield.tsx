import classNames from 'classnames';
import $ from '@/components/common/Input/Input.module.scss';
import Input from '.';
import { Body2 } from '@/components/common/Typography';
import { Dispatch, SetStateAction } from 'react';

interface InputFieldProps {
    label?: string;
    text: string;
    setText: Dispatch<SetStateAction<string>>;
}

function Inputfield({ label, text, setText }: InputFieldProps) {
    return (
        <div className={classNames($.fieldWrapper)}>
        <div>
            {label && <Body2>{label}</Body2>}
            <Input text={text} setText={setText} />
        </div>
        </div>
    );
}

export default Inputfield;