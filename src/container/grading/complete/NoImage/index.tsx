import { Body1 } from '@/components/common/Typography';
import $ from './noImage.module.scss';
import ButtonLayout from '@/components/domain/grading/buttonLayout';
import { ClapComplete } from '@/components/common/TossFace';

type CompleteLayoutProps = {
  handleStep: (step: string) => void;
};

export default function NoImage({ handleStep }: CompleteLayoutProps) {
  return (
    <div className={$.Wrapper}>
      <div className={$.layout}>
        <ClapComplete />
        <div className={$.text}>
          <Body1>
            채점 결과는 닉네임이 직접 확인할 수 있답니다.
            <br /> 다른 사람이 생각하는 내가 궁금하다면?
          </Body1>
        </div>
        <ButtonLayout />
      </div>
    </div>
  );
}