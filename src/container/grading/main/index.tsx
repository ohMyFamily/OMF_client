import classNames from 'classnames';
import $ from './main.module.scss';
import BlueTitleText from '@/components/common/Item/BlueTitleText';
import { Body2, Caption1, Title1 } from '@/components/common/Typography';
import Button from '@/components/common/Button';
import BackgroundSVG from '@/components/common/Item/BackgroundSVG';

type MainLayoutProps = {
  handleStep: (step: string) => void;
};

export default function MainLayout({ handleStep }: MainLayoutProps) {
  const onClickNextStep = () => {
    handleStep('가이드');
  };
  return (
    <div className={classNames($.Wrapper)}>
      <div className={classNames($.Container)}>
        <BackgroundSVG />
        <div className={classNames($.TextContainer)}>
          <BlueTitleText size="md">
            <Caption1>가정의 달 이벤트</Caption1>
          </BlueTitleText>
          <Title1>
            닉네임이 직접 푼
            <br />
            애칭 10문 10답
          </Title1>
          <Body2>
            {'닉네임'}이 나에 대한 간단한 퀴즈 10개를 풀었어요.
            <br />
            정답은 오로지 나만 알고 있답니다!
            <br />
            아래 버튼을 누르고 몇개나 맞췄는지 알아보지고요.
          </Body2>
        </div>
        <div className={classNames($.ButtonContainer)}>
          <Button variant="secondary" onClick={onClickNextStep}>
            답안지 확인하기
          </Button>
        </div>
      </div>
    </div>
  );
}