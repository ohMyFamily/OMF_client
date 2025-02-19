import { ScoreInfo } from "@/components/common/Card/CardType";
import { P100, P20, P40, P60, P80, P90 } from '@components/common/TossFace';


//score 관련
export const scoreImages = {
  P20,
  P40,
  P60,
  P80,
  P90,
  P100,
};

export const scoreTable: ScoreInfo[] = [
    {
      imageKey: 'P20',
      title: '말하는 감자',
      description: '저는 말하는 감자라구요. 아시겠어요?',
    },
    {
      imageKey: 'P40',
      title: '효자 맛보기 스푼',
      description: '효도를 이렇게 콕 찍어서 뇸!',
    },
    {
      imageKey: 'P60',
      title: '효자 호소인',
      description: '어어색할거같진 않고 분명히어색할거같아요',
    },
    {
      imageKey: 'P80',
      title: '말하는 감자',
      description: '저는 말하는 감자라구요. 아시겠어요?',
    },
    {
      imageKey: 'P90',
      title: '홍진효',
      description: '홍진효',
    },
    {
      imageKey: 'P100',
      title: '인간 코지마',
      description: '사랑하니까 바디프렌드 (둘 다 광고 아님)',
    },
  ];
  
//전체 문제 개수
export const TOTAL_QUESTION = 10;

//애칭 예시
export const nicknameExamples = {
  mom: ['어머니', '엄마'],
  dad: ['아버지', '아빠'],
  others: ['할머니', '할아버지', '삼촌'],
};