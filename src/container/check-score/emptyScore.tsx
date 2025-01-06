import $ from './emptyScore.module.scss';
import classNames from 'classnames';
import AppBar from '@/components/common/AppBar';
import { Body3, Title2, Button2 } from '@/components/common/Typography';
import { useNavigate } from 'react-router-dom';
import blank from '@/assets/svg/Blank.svg';
import Button from '@/components/common/Button';

export default function EmptyScoreLayout() {
  const navigate = useNavigate();

  const onClickLeftButton = () => {
    navigate(-1);
  };

  const HowToStart = () => {
    navigate('/guide');
  }

  const startTest = () => {
    navigate('/test');
  }

  return (
    <>
      <div className={classNames($.TextContainer)}>
        <img src={blank} />
        <Title2>아직 확인할 수 있는 점수가 없어요!</Title2>
        <Body3>
          내 답안지를 채점한 사람이 없어요.
          <br />
          사랑하는 사람에 대한 퀴즈를 풀고
          <br />그 사람에 대해 얼마나 많이 알고 있는지 확인해보세요!
        </Body3>
      </div>
      <div className={classNames($.ButtonContainer)}>
        <Button2 underline={true} onClick={HowToStart}>어떻게 하는 거예요?</Button2>
      </div>
      <Button variant='primary' onClick={startTest}>테스트 시작하기</Button>
    </>
  );
}
