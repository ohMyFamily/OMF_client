import { Body2, Caption1, Title1, Title2, Title3 } from '@/components/common/Typography';
import $ from './done.module.scss';
import classNames from 'classnames';
import KakaoShareButton from '@/components/common/KakaoShareButton';
import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';
import { AnimateClap } from '@/components/common/TossFace';
import { useToast } from '@/hooks/useToast';
import { useState, useEffect } from 'react';
import BlueTitleText from '@/components/common/Item/BlueTitleText';
import { useGetUserNames } from '@/apis/queries/user';
import Textarea from '@/components/common/Textarea';
import { useChangeNameMutation } from '@/apis/queries/answer';

interface TestCompletedProps {
  nickname: string;
  quizid: number;
}

function TestCompletedLayout({ nickname, quizid }: TestCompletedProps) {
  const navigate = useNavigate();
  const { addToasts } = useToast();
  const [step, setStep] = useState(1);
  const [nameInput, setNameInput] = useState('');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const names = quizid ? useGetUserNames(quizid) : null;
  
  useEffect(() => {
    if (names && names.kakao_nickname) {
      setDisplayName(names.kakao_nickname);
    }
  }, [names]);

  const [displayName, setDisplayName] = useState('');

  const changeNameMutation = useChangeNameMutation(
    () => {
      addToasts('입력하신 닉네임이 저장되었어요!', { bottom: '220px' });
      setDisplayName(nameInput);
    },
    () => {
      addToasts('닉네임 저장에 실패했습니다. 다시 시도해주세요.', { bottom: '220px' });
    }
  );

  const handleSaveName = () => {
    if (nameInput.trim()) {
      changeNameMutation.mutate({
        quizid: quizid,
        name: nameInput.trim()
      });
    }
  };

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStep(2);
    }, 2500);

    const timer2 = setTimeout(() => {
      setStep(3);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  //링크 복사
  const handleCopy = async () => {
    const shareURL = `${window.location.origin}/grading/${quizid}`;

    try {
      await navigator.clipboard.writeText(shareURL);
      addToasts('클립보드에 링크가 복사되었습니다.', { bottom: '220px'});
    } catch (error) {
      console.error('클립보드 복사 실패:', error);
    }
  };

  //다른 가족 선택하기
  const handleRetry = () => {
    navigate('/test');
  };

  return (
    <>
      {step === 1 && (
        <div className={classNames($.Wrapper)}>
          <div className={classNames($.Container)}>
            <img src={AnimateClap} alt="박수 이미지" />
            <Title2>문제를 다 풀었어요!</Title2>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className={classNames($.Wrapper)}>
          <div className={classNames($.Container)}>
            <Title2>
              답안지를 {names.nickname}에게 보내서
              <br /> 채점을 받아볼까요?
            </Title2>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className={classNames($.Wrapper)}>
          <div className={classNames($.exampleWrapper)}>
            <div className={classNames($.exampleText)}>
              <div className={classNames($.BlueTitleText)}>
                <BlueTitleText size="lg">
                  <Caption1>가정의 달 이벤트</Caption1>
                </BlueTitleText>
              </div>
              <div className={classNames($.TitleText)}>
                <Title1>
                  {displayName || names.kakao_nickname}의
                  <br />
                  {names.nickname} 10문 10답
                </Title1>
              </div>
            </div>
            <div className={classNames($.exampleDescription)}>
              <div className={classNames($.nicknameText)}>
                <Title3>{names.nickname}께서 처음 보실 화면이에요.</Title3>
              </div>

              <Body2>이름을 바꾸고 싶다면 아래에 적고 저장해주세요.</Body2>
              <Textarea
                text={nameInput}
                setText={setNameInput}
                inputMode="text"
                buttonType="save"
                onSave={handleSaveName}
                isLoading={changeNameMutation.isPending}
              />
            </div>
          </div>

          <div className={classNames($.ButtonContainer)}>
            <KakaoShareButton variant="grading" quizid={quizid} />
            <Button variant="tertiary" onClick={handleCopy}>
              링크 복사
            </Button>
          </div>

          <Button variant="primary" onClick={handleRetry}>
            다른 가족 문제 풀기
          </Button>
        </div>
      )}
    </>
  );
}

export default TestCompletedLayout;