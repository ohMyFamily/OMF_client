import classNames from 'classnames';
import $ from '@/components/common/Textarea/textarea.module.scss';
import Textarea from '.';
import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import Body1 from '../Typography/Body1';

interface TextareaDateFieldProps {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  inputMode: string;
}

export default function TextareaDateField({ text, setText }: TextareaDateFieldProps) {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  useEffect(() => {
    if (text) {
      // XXXX년 XX월 XX일에서 년, 월, 일 추출
      const yearMatch = text.match(/(\d+)년/);
      const monthMatch = text.match(/(\d+)월/);
      const dayMatch = text.match(/(\d+)일/);
      
      if (yearMatch && yearMatch[1]) setYear(yearMatch[1]);
      if (monthMatch && monthMatch[1]) setMonth(monthMatch[1]);
      if (dayMatch && dayMatch[1]) setDay(dayMatch[1]);
    }
  }, [text]);

  useEffect(() => {
    if (year || month || day) {
      const formattedDate = `${year}년 ${month}월 ${day}일`;
      setText(formattedDate);
    }
  }, [year, month, day, setText]);

  // year 숫자 4자리 입력하면, month로 자동 커서 이동
  const moveCursorToMonth = (textbox: HTMLTextAreaElement) => {
    if (textbox.value.length === 4) {
      const monthElement = document.getElementById("month");
      if (monthElement) {
        (monthElement.querySelector('textarea') as HTMLTextAreaElement)?.focus();
      }
    }
  };
  // month 숫자 2자리 입력하면, day로 자동 커서 이동
  const moveCursorToDay = (textbox: HTMLTextAreaElement) => {
    if (textbox.value.length === 2) {
      const dayElement = document.getElementById("day");
      if (dayElement) {
        (dayElement.querySelector('textarea') as HTMLTextAreaElement)?.focus();
      }
    }
  };

  return (
    <div className={classNames($.dateInputWrapper)}>
      <div className={classNames($.inputWrapper, $.yearField)}>
        <Textarea
          text={year}
          setText={setYear}
          inputMode="numeric"
          variant="date"
          maxLength={4}
          onKeyUp={(e) => moveCursorToMonth(e.target as HTMLTextAreaElement)}
        />
        <Body1>년</Body1>
      </div>
      <div className={classNames($.inputWrapper, $.monthDayField)} id='month'>
        <Textarea
          text={month}
          setText={setMonth}
          inputMode="numeric"
          variant="date"
          maxLength={2}
          onKeyUp={(e) => moveCursorToDay(e.target as HTMLTextAreaElement)}
        />
        <Body1>월</Body1>
      </div>
      <div className={classNames($.inputWrapper, $.monthDayField)} id='day'>
        <Textarea
          text={day}
          setText={setDay}
          inputMode="numeric"
          variant="date"
          maxLength={2}
        />
        <Body1>일</Body1>
      </div>
    </div>
  );
}