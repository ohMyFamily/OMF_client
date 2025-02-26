import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import classNames from 'classnames';
import $ from './enterName.module.scss';
import AppBar from '@/components/common/AppBar';
import Heart from '@/assets/svg/Tossface/Heart.svg';
import { Title2 } from '@/components/common/Typography';
import TextareaField from '@/components/common/Textarea/textareaField';
import Button from '@/components/common/Button';
import { PersonType } from '@/constants/business.constants';

interface EnterNameLayoutProps {
  person: PersonType;
  setName: Dispatch<SetStateAction<string>>;
  handleStep: (step: string) => void;
}

function EnterNameLayout({ person, handleStep, setName }: EnterNameLayoutProps) {
  const [nameInput, setNameInput] = useState('');

  const disabled = useMemo(() => {
    return nameInput.trim().length === 0;
  }, [nameInput]);

  const handleNext = () => {
    setName(nameInput);
    handleStep('질문');
  };

  return (
    <div className={classNames($.Wrapper)}>
      <AppBar leftRole="back" onClickLeftButton={() => handleStep('선택')} />
      <div className={classNames($.Container)}>
        <div className={classNames($.ContentWrapper)}>
          <img src={Heart} alt="하트" />
          <Title2>
            {person === 'mom' ? (
              <>
                평소에 부르는 어머니 애칭이
                <br />
                있다면 적어주세요!
              </>
            ) : person === 'dad' ? (
              <>
                평소에 부르는 아버지 애칭이
                <br />
                있다면 적어주세요!
              </>
            ) : (
              <>
                누구에 대해 알아볼까요?
                <br />
                애칭이 있다면 적어주세요!
              </>
            )}
          </Title2>
          <TextareaField
            text={nameInput}
            setText={setNameInput}
            maxLength={6}
            nameExamples={person}
            showCounter={true}
            label={
              <div className={classNames($.NameWrapper)}>
                이름, 호칭 등 <span className={classNames($.highlight)}>6자 이내(공백 포함)</span>로 적어주세요.
              </div>
            }
          />
        </div>
        <Button variant="secondary" onClick={handleNext} disabled={disabled}>
          다음
        </Button>
      </div>
    </div>
  );
}

export default EnterNameLayout;