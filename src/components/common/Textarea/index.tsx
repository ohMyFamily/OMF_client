import classNames from 'classnames';
import {
  ChangeEvent,
  useEffect,
  useState,
  useRef,
  SetStateAction,
  Dispatch,
  KeyboardEvent,
} from 'react';
import $ from '@/components/common/Textarea/textarea.module.scss';
import X from '@/assets/svg/X.svg?react';
import { Body2, Body3 } from '@/components/common/Typography';

interface TextareaProps {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  maxLength?: number;
  inputMode?: 'text' | 'numeric';
  showCounter?: boolean;
  buttonType?: 'clear' | 'save';
  variant?: 'date';
  onKeyUp?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({
  text,
  setText,
  maxLength,
  inputMode,
  showCounter,
  buttonType,
  variant,
  onKeyUp,
}: TextareaProps) {
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [hasText, setHasText] = useState<boolean>(!!text);
  
  //textarea을 focus하기 위해 useRef 사용(handleClear 실행 이후에도 포커스가 유지되도록)
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  //div 밖 영역 감지를 위해
  const textareaWrapperRef = useRef<HTMLDivElement>(null);
  // 장문 입력 시 textarea 높이를 자동으로 조절함
  const handleResizeHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
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
    const hasContent = text !== '';
    setHasText(hasContent);
    setIsTyping(hasContent);
  }, [text]);

  useEffect(() => {
    const handleTextareaDivOutside = (event: MouseEvent | TouchEvent) => {
      if (
        textareaWrapperRef.current &&
        !textareaWrapperRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('button') // 탭한 곳이 버튼인 경우는 제외
      ) {
        setIsFocused(false);
        textareaRef.current?.blur();
      }
    };

    document.addEventListener('mousedown', handleTextareaDivOutside);
    document.addEventListener('touchstart', handleTextareaDivOutside);

    return () => {
      document.removeEventListener('mousedown', handleTextareaDivOutside);
      document.removeEventListener('touchstart', handleTextareaDivOutside);
    };
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const shouldShowButton = () => {
    //글자수 표시 거나 날짜입력모드인 경우
    if (showCounter || variant === 'date') return false;
    //X버튼은 텍스트가 있고 포커스가 있는 경우만 표시
    if (buttonType === 'clear') {
      return hasText && isFocused;
    } else if (buttonType === 'save') {
      return true;
    }
    return false;
  };

  const renderButton = () => {
    if (!shouldShowButton()) return null;

    if (buttonType === 'clear') {
      return (
        <div className={classNames($.textareaCloseWrapper)}>
          <X className={classNames($.textareaClose)} onClick={handleClear} />
        </div>
      );
    } else if (buttonType === 'save') {
      return (
        <div 
          className={classNames(
            $.textareaSaveWrapper,
            hasText ? $.active : $.inactive,
            !hasText && $.disabled 
          )}
          onClick={handleSave} 
          style={{ 
            cursor: hasText ? 'pointer' : 'default' 
          }}
        >
          <Body2>저장</Body2>
        </div>
      );
    }

    return null;
  };

  // 저장 api 붙이기
  const handleSave = () => {
    console.log("저장 버튼 클릭함")
  }

  return (
    <div className={classNames($.textareaContainer)}>
      <div
        ref={textareaWrapperRef}
        className={classNames($.textareaWrapper, {
          [$.date]: variant === 'date',
        })}
      >
        <textarea
          className={classNames($.textarea, {
            [$.date]: variant === 'date',
          })}
          rows={1}
          ref={textareaRef}
          value={text}
          maxLength={maxLength}
          onChange={onChangeText}
          inputMode={inputMode}
          onKeyUp={onKeyUp}
          onFocus={handleFocus}
        />
        {renderButton()}
      </div>
      {showCounter && (
        <div className={classNames($.counterWrapper)}>
          <Body3>
            {text.length}/{maxLength}
          </Body3>
        </div>
      )}
    </div>
  );
}