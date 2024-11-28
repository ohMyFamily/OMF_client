import CheckScoreDetailLayout from '@/container/check-score/detail';
import { P100, P20, P40, P60, P80, P90 } from '@components/common/TossFace';

const scoreMockData = [
  {
    imageKey: P20,
    nickname: '엄망',
    title: '말하는 감자',
    description: '저는 말하는 감자라구요. 아시겠어요?',
    explanation:
      '사실 당신은 인간이 된 꿈을 꾸고 있는 감자인 것입니다. 감자가 사람이 되기 위해서는 쑥과 마늘을 먹어야 하지만, 당신은 그러지 않았군요.',
    score: 20,
  },
  {
    imageKey: P40,
    nickname: '어무니',
    title: '효자 맛보기 스푼',
    description: '효도를 이렇게 콕 찍어서 뇸!',
    explanation:
      '효도는 한 스푼씩, 조금씩 실천하는 것부터 시작입니다. 지금부터라도 시작해보는 건 어떨까요?',
    score: 40,
  },
  {
    imageKey: P60,
    nickname: '아부지',
    title: '효자 호소인',
    description: '어어색할거같진 않고 분명히어색할거같아요',
    explanation:
      '어색하지만 그래도 노력하는 모습이 보이네요. 조금 더 자연스러워질 수 있도록 해보아요.',
    score: 60,
  },
  {
    imageKey: P80,
    nickname: '아빵',
    title: '말하는 감자',
    description: '저는 말하는 감자라구요. 아시겠어요?',
    explanation: '무럭무럭 자라나는 새싹처럼, 당신의 효심도 쑥쑥 자라나고 있습니다!',
    score: 80,
  },
  {
    imageKey: P90,
    nickname: '엄마아',
    title: '홍진효',
    description: '홍진효',
    explanation: '거의 다 왔어요! 조금만 더 노력하면 완벽한 효자/효녀가 될 수 있을 거예요.',
    score: 90,
  },
  {
    imageKey: P100,
    nickname: '아빠앙',
    title: '인간 코지마',
    description: '사랑하니까 바디프렌드 (둘 다 광고 아님)',
    explanation: '당신은 이미 완벽한 효자/효녀입니다! 이대로만 계속 해주세요.',
    score: 100,
  },
];

export default function CheckScoreDetail() {
  //임시
  const data = scoreMockData[0];

  return (
    <div>
      <CheckScoreDetailLayout
        nickname={data.nickname}
        image={data.imageKey}
        title={data.title}
        description={data.description}
        explanation={data.explanation}
        variant="score"
        score={data.score}
      />
    </div>
  );
}
