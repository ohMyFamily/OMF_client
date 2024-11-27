import AppBar from '@/components/common/AppBar';
import Button from '@/components/common/Button';
import { Title2, Body1 } from '@/components/common/Typography';
import classNames from 'classnames';
import $ from './selectType.module.scss';

interface SelectTypeLayoutProps {
  handleStep: (step: string) => void;
  setSelectedType: (type: string) => void;
}

function SelectTypeLayout({ handleStep, setSelectedType }: SelectTypeLayoutProps) {
  const handleNavigate = (value: string) => {
    setSelectedType(value);
    handleStep('애칭');
  };

  return (
    <div className={classNames($.Wrapper)}>
      <AppBar leftRole="back" />
      <div className={classNames($.TextWrapper)}>
        <div className={classNames($.Title)}>
          <Title2>누구에 대해 알아볼까요?</Title2>
        </div>
        <div className={classNames($.Body)}>
          <Body1>
            선택한 사람에 대해
            <br />
            간단한 퀴즈 10개를 풀어볼 거예요.
          </Body1>
        </div>
      </div>
      <div className={classNames($.ButtonWrapper)}>
        <Button variant="primary" onClick={() => handleNavigate('mom')}>
          어머니
        </Button>
        <Button variant="primary" onClick={() => handleNavigate('dad')}>
          아버지
        </Button>
        <Button variant="primary" onClick={() => handleNavigate('others')}>
          다른 가족
        </Button>
      </div>
    </div>
  );
}

export default SelectTypeLayout;
