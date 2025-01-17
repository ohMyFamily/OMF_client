import { useEffect, useState } from 'react';
import $ from './hasImage.module.scss';
import ClapComplete from '@/components/domain/grading/clapComplete';
import { Body2, Title2 } from '@/components/common/Typography';
import { Angel } from '@/components/common/TossFace';
import sample from '@/assets/image/splash1.png';
import ButtonLayout from '@/components/domain/grading/buttonLayout';
import { useParams } from 'react-router-dom';
import { useGetUserNames } from '@/apis/queries/user';

type HasImageProps = {
  handleStep: (step: string) => void;
  imageUrl?: string;
};

export default function HasImage({ handleStep, imageUrl }: HasImageProps) {
  const {quizid} = useParams();
  const names = useGetUserNames(Number(quizid));
  
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const time = setTimeout(() => {
      setStep(1);
    }, 3000);

    return () => clearTimeout(time);
  }, []);

  return (
    <div className={$.Wrapper}>
      <div className={$.layout}>
        {step === 0 && <ClapComplete />}
        {step === 1 && (
          <div className={$.step2}>
            <Title2>
              {names.kakao_nickname}이 수줍게 <br /> 간직하고 있는 나의 사진입니다.
            </Title2>
            <div className={$.text}>
              <Body2>
                혹시 아주 약간 아쉽다면 <br /> 함께 사진찍는 추억을 만들어보는건 어떨까요?
              </Body2>
            </div>
            <div className={$.image}>
            <img src={imageUrl || sample} alt="자식 업로드 이미지" /> 
            </div>
            <ButtonLayout />
          </div>
        )}
      </div>
    </div>
  );
}
