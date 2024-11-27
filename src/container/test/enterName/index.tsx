import { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import $ from './enterName.module.scss';
import AppBar from '@/components/common/AppBar';
import Heart from '@/assets/svg/Tossface/Heart.svg';
import { Title2 } from '@/components/common/Typography';
import Inputfield from '@/components/common/Input/Inputfield';
import Button from '@/components/common/Button';

function EnterName() {
  const { person } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');

  const handleGoBack = () => {
    navigate(-1);
  };

  const disabled = useMemo(() => {
    return text.trim().length === 0;
  }, [text]);

  const handleNext = () => {};

  return (
    <div className={classNames($.Wrapper)}>
      <AppBar leftRole="back" onClickLeftButton={handleGoBack} />
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
          <Inputfield
            text={text}
            setText={setText}
            label={
              <>
                {person === 'mom' ? (
                  <>
                    어머니, 어마마마 등{' '}
                    <span className={classNames($.highlight)}>6자 이내(공백 포함)</span>로
                    적어주세요.
                  </>
                ) : person === 'dad' ? (
                  <>
                    아버지, 아바마마 등{' '}
                    <span className={classNames($.highlight)}>6자 이내(공백 포함)</span>로
                    적어주세요.
                  </>
                ) : (
                  <>
                    이름, 호칭 등{' '}
                    <span className={classNames($.highlight)}>6자 이내(공백 포함)</span>로
                    적어주세요.
                  </>
                )}
              </>
            }
          />
        </div>
        <Button variant="tertiary" onClick={handleNext} disabled={disabled}>
          다음 문제
        </Button>
      </div>
    </div>
  );
}

export default EnterName;
