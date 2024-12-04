import Button from '../Button';
import kakaoLogo from '@/assets/svg/KakaoLogo.svg';
import { KAKAO_JS_KEY } from '@/constants/develop.constants';
import { useEffect } from 'react';

interface KakaoShareButttonProps {
  variant: 'grading' | 'test';
  childId?: number;
  name?: string;
}

export default function KakaoShareButton({ variant, childId, name }: KakaoShareButttonProps) {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_JS_KEY);
    }
  }, []);

  const onClickShareButton = () => {
    //서비스 공유
    if (variant === 'test') {
      window.Kakao.Share.sendCustom({
        templateId: 114874,
        templateArgs: {
          THU: 'https://oh-my-family-bucket.s3.ap-northeast-2.amazonaws.com/children-2.png',
        },
      });
    } else {
      //채점 부탁
      window.Kakao.Share.sendCustom({
        templateId: 114875,
        templateArgs: {
          THU: 'https://oh-my-family-bucket.s3.ap-northeast-2.amazonaws.com/parent-1.png',
          childId: childId,
          name: name,
        },
      });
    }
  };

  return (
    <Button variant="kakaoLogin" icon={kakaoLogo} onClick={onClickShareButton}>
      카카오톡으로 공유하기
    </Button>
  );
}
