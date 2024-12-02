import Button from '../Button';
import kakaoLogo from '@/assets/svg/KakaoLogo.svg';
import { KAKAO_JS_KEY } from '@/constants/develop.constants';
import { useEffect } from 'react';

export default function KakaoShareButton() {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_JS_KEY);
    }
  }, []);

  const onClickShareButton = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'commerce',
      content: {
        title: 'ㅎㅇ',
        imageUrl:
          'https://ootdzip.com/_next/image?url=https%3A%2F%2Footdzip.s3.ap-northeast-2.amazonaws.com%2F1719b103-3475-47df-a8e5-706a94020bec_2024-05-23.jpg&w=1920&q=75',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      commerce: {
        productName: '낙지',
        regularPrice: 100000,
        discountRate: 10,
        discountPrice: 90000,
      },
      buttons: [
        {
          title: '구매하기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        {
          title: '공유하기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    });
  };
  return (
    <Button variant="kakaoLogin" icon={kakaoLogo} onClick={onClickShareButton}>
      카카오톡으로 공유하기
    </Button>
  );
}
