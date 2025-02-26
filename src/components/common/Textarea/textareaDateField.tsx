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
  const [date, setDate] = useState('');

  useEffect(() => {
    if (text) {
      // XXXX년 XX월 XX일에서 년, 월, 일 추출
      const yearMatch = text.match(/(\d+)년/);
      const monthMatch = text.match(/(\d+)월/);
      const dateMatch = text.match(/(\d+)일/);
      
      if (yearMatch && yearMatch[1]) setYear(yearMatch[1]);
      if (monthMatch && monthMatch[1]) setMonth(monthMatch[1]);
      if (dateMatch && dateMatch[1]) setDate(dateMatch[1]);
    }
  }, [text]);

  useEffect(() => {
    if (year || month || date) {
      const formattedDate = `${year}년 ${month}월 ${date}일`;
      setText(formattedDate);
    }
  }, [year, month, date, setText]);

  // year 숫자 4자리 입력하면, month로 자동 커서 이동
  const moveCursorToMonth = (textbox: HTMLTextAreaElement) => {
    if (textbox.value.length === 4) {
      const monthElement = document.getElementById("month");
      if (monthElement) {
        (monthElement.querySelector('textarea') as HTMLTextAreaElement)?.focus();
      }
    }
  };
  // month 숫자 2자리 입력하면, date로 자동 커서 이동
  const moveCursorToDate = (textbox: HTMLTextAreaElement) => {
    if (textbox.value.length === 2) {
      const dateElement = document.getElementById("date");
      if (dateElement) {
        (dateElement.querySelector('textarea') as HTMLTextAreaElement)?.focus();
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
      <div className={classNames($.inputWrapper, $.monthDateField)} id='month'>
        <Textarea
          text={month}
          setText={setMonth}
          inputMode="numeric"
          variant="date"
          maxLength={2}
          onKeyUp={(e) => moveCursorToDate(e.target as HTMLTextAreaElement)}
        />
        <Body1>월</Body1>
      </div>
      <div className={classNames($.inputWrapper, $.monthDateField)} id='date'>
        <Textarea
          text={date}
          setText={setDate}
          inputMode="numeric"
          variant="date"
          maxLength={2}
        />
        <Body1>일</Body1>
      </div>
    </div>
  );
}