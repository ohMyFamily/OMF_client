import { useEffect, useState } from 'react';
import $ from './hasImage.module.scss';
import ClapComplete from '@/components/domain/grading/clapComplete';
import { Body1, Title2 } from '@/components/common/Typography';
import { Angel } from '@/components/common/TossFace';
import sample from '@/assets/image/splash1.png';
import ButtonLayout from '@/components/domain/grading/buttonLayout';

type HasImageProps = {
  handleStep: (step: string) => void;
};

export default function HasImage({ handleStep }: HasImageProps) {
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
              닉네임이 수줍게 <br /> 간직하고 있는 나의 사진입니다.
            </Title2>
            <div className={$.text}>
              <Body1>
                혹시 아주 약간 아쉽다면 <br /> 함께 사진찍는 추억을 만들어보는건 어떨까요?
              </Body1>
            </div>
            <div className={$.image}>
              <img src={sample} />
            </div>
            <ButtonLayout />
          </div>
        )}
      </div>
    </div>
  );
}
