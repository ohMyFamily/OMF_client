import Radio from '@/components/common/Radio';
import { useToast } from '@/hooks/useToast';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@/components/common/Input';
import Inputfield from '@components/common/Input/Inputfield';
import { ChangeEvent, useState } from 'react';

const HomePage = () => {
  const navigate = useNavigate();
  const { addToasts } = useToast();

  const [isSelectedIndex, setIsSelectedIndex] = useState<number>(-1);
  const [text, setText] = useState<string>('');
  const [text1, setText1] = useState<string>('');
  const [text2, setText2] = useState<string>('');

  const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText2(e.target.value);
  };

  return (
    <>
      <Radio
        options={['오늘', '지난주', '지난달', '죄송해요 전화 자주 할게요']}
        isSelectedIndex={isSelectedIndex}
        setIsSelectedIndex={setIsSelectedIndex}
      />
      <button onClick={() => addToasts('aa')}>토스트 추가</button>
      <button onClick={() => navigate('/')}>이동</button>

      <Input text={text} setText={setText} />
        <Inputfield text={text1} setText={setText1} />
        {text2.length > 10 ? (
          <textarea value={text2} onChange={onChangeTextArea} />
        ) : (
          <Inputfield text={text2} setText={setText2} label='원빈 닮았다고 하세요.' />
        )}

    </>
  );
};

export default HomePage;
