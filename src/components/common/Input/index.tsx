import classNames from 'classnames';
import { ChangeEvent, useEffect, useState, useRef } from 'react';
import $ from './Input.module.scss';
import X from '@/assets/svg/X.svg';

export default function Input() {
    const [text, setText] = useState<string>('');
    const [isTyping, setIsTyping] = useState<boolean>(false);
    //input을 focus하기 위해 useRef 사용(handleClear 실행 이후에도 포커스가 유지되도록)
    const inputRef = useRef<HTMLInputElement>(null);
    //div 밖 영역 감지를 위해
    const inputWrapperRef = useRef<HTMLDivElement>(null);

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    };

    const handleClear = () => {
        setText('');
        inputRef.current?.focus();
    };

    //focus를 잃을 경우
    const handleBlur = () => {
        setIsTyping(false);
    };

    useEffect(() => {
        if (text == '') {
        setIsTyping(false);
        } else {
        setIsTyping(true);
        }
    }, [text]);

    //input div 밖의 영역 터치 시 istyping = false, input 포커스 해제
    useEffect(() => {
        const handleInputDivOutside = (event: MouseEvent | TouchEvent) => {
        if (inputWrapperRef.current && !inputWrapperRef.current.contains(event.target as Node)) {
            setIsTyping(false);
            inputRef.current?.blur();
        }
        };

        document.addEventListener('mousedown', handleInputDivOutside);
        document.addEventListener('touchstart', handleInputDivOutside);

        return () => {
        document.removeEventListener('mousedown', handleInputDivOutside);
        document.removeEventListener('touchstart', handleInputDivOutside);
        };
    }, []);

    return (
        <div ref={inputWrapperRef} className={classNames($.inputWrapper)}>
        <input
            ref={inputRef}
            value={text}
            className={classNames($.input)}
            onChange={onChangeText}
            onBlur={handleBlur}
        />
        {isTyping && (
            <div className={classNames($.inputCloseWrapper)}>
            <img src={X} className={classNames($.inputClose)} onClick={handleClear} />
            </div>
        )}
        </div>
    );
}
