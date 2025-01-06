import AppBar from '@/components/common/AppBar';
import $ from './guide.module.scss';
import { useNavigate } from 'react-router-dom';
import { Body2, Caption1, Title2, Title3 } from '@/components/common/Typography';
import Guide1 from '@/assets/image/guide1.png';
import Guide2 from '@/assets/image/guide2.png';
import Guide3 from '@/assets/image/guide3.png';
import Button from '@/components/common/Button';
import KakaoLogo from '@/assets/svg/KakaoLogo.svg';
import { kakaoLoginLink } from '@/constants/develop.constants';
import BlueTitleText from '@/components/common/Item/BlueTitleText';

const guideArray = [
  {
    id: 1,
    image: Guide1,
    title: <>알아보고 싶은 사람을 선택해주세요.</>,
    body: (
      <>
        혹시 그 분을 부르는 애칭이 있다면 적어주세요. <br />
        없다면 이름이나 별명, 호칭도 좋아요!
      </>
    ),
  },
  {
    id: 2,
    image: Guide2,
    title: <>완성된 답안지를 공유해주세요.</>,
    body: (
      <>
        링크 한 줄이면 별도의 로그인 없이 <br />
        퀴즈의 주인공이 직접 채점할 수 있어요.
      </>
    ),
  },
  {
    id: 3,
    image: Guide3,
    title: <>내 점수를 확인할 수 있어요.</>,
    body: (
      <>
        채점이 끝났어요! <br />몇 개나 맞혔는지 확인하러 가볼까요?
      </>
    ),
  },
];

export default function GuideLayout() {
  const navigate = useNavigate();

  const onClickLeftButton = () => {
    navigate(-1);
  };

  const onClickKakaoLoginButton = () => {
    window.location.href = kakaoLoginLink;
  };
  return (
    <>
      <AppBar leftRole="back" onClickLeftButton={onClickLeftButton} className={$.appbar} />
      <div className={$.Wrapper}>
        <div className={$.title}>
          <Title2>
            만나서 반가워요! <br /> Oh my family를 소개할게요.
          </Title2>
        </div>
        <Body2>
          부모님 또는 다른 가족에 대한 <br />
          간단한 퀴즈를 풀 수 있는 서비스에요.
          <br />
          학업, 독립등의 이유로 가족과 소원해진 분들을 위해
          <br />
          만들었어요. 자세한 이용 방법을 알려드릴게요!
        </Body2>
        {guideArray.map((item) => {
          return (
            <div className={$.card}>
              <BlueTitleText size='md'>
                <Caption1>{item.id}</Caption1>
              </BlueTitleText>
              <div className={$.text}>
                <Title3>{item.title}</Title3>
                <Body2>{item.body}</Body2>
              </div>
              <img src={item.image} alt="가이드 이미지" />
            </div>
          );
        })}
        <Button icon={KakaoLogo} variant="kakaoLogin" onClick={onClickKakaoLoginButton}>
          로그인하고 테스트 시작하기
        </Button>
      </div>
    </>
  );
}
