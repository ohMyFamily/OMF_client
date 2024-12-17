import classNames from 'classnames';
import { ChangeEvent, useEffect, useState, useRef, SetStateAction, Dispatch } from 'react';
import $ from '@/components/common/Input/Input.module.scss';
import X from '@/assets/svg/X.svg?react';

interface InputProps {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  maxLength?: number;
  inputMode?: 'text' | 'numeric';
}

export default function Input({ text, setText, maxLength, inputMode }: InputProps) {
  const [isTyping, setIsTyping] = useState<boolean>(false);
  //textarea을 focus하기 위해 useRef 사용(handleClear 실행 이후에도 포커스가 유지되도록)
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  //div 밖 영역 감지를 위해
  const inputWrapperRef = useRef<HTMLDivElement>(null);


  // 장문 입력 시 textarea 높이를 자동으로 조절함 
  const handleResizeHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const newHeight = textarea.scrollHeight; 
      textarea.style.height = `${newHeight}px`; 
    }
  };

  // 입력이 변경될 때마다 높이 조절
  useEffect(() => {
    handleResizeHeight();
  }, [text]);

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (!maxLength || newValue.length <= maxLength) {
      setText(newValue);
    }
  };

  const handleClear = () => {
    setText('');
    textareaRef.current?.focus();
  };

  useEffect(() => {
    if (text == '') {
      setIsTyping(false);
    } else {
      setIsTyping(true);
    }
  }, [text]);

  useEffect(() => {
    const handleInputDivOutside = (event: MouseEvent | TouchEvent) => {
      if (inputWrapperRef.current && !inputWrapperRef.current.contains(event.target as Node)) {
        setIsTyping(false);
        textareaRef.current?.blur();
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
      <textarea
        className={classNames($.input)}
        rows={1}
        ref={textareaRef}
        value={text}
        maxLength={maxLength}
        onChange={onChangeText}
        inputMode={inputMode}
      />
      {isTyping && (
        <div className={classNames($.inputCloseWrapper)}>
          <X className={classNames($.inputClose)} onClick={handleClear} />
        </div>
      )}
    </div>
  );
}
