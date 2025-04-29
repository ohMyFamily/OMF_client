import kakaoLogo from '@/assets/svg/KakaoLogo.svg';
import { KAKAO_JS_KEY } from '@/constants/develop.constants';
import { useEffect } from 'react';
import { Button1 } from '../Typography';
import classNames from 'classnames';
import $ from './kakaoShareButton.module.scss';

interface KakaoShareButttonProps {
  variant: 'grading' | 'test';
  quizid?: number;
  name?: string;
}

export default function KakaoShareButton({ variant, quizid, name }: KakaoShareButttonProps) {
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
          quizid: quizid,
          name: name,
        },
      });
    }
  };

  return (
    <div className={classNames($.Container)} onClick={onClickShareButton}>
      <img src={kakaoLogo} />
      <Button1>{variant === 'test' ? '테스트 공유하기' : '답안지 링크 공유'}</Button1>
    </div>
  );
}
