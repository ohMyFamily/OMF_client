import { Body2 } from '@/components/common/Typography';
import $ from './noImage.module.scss';
import ButtonLayout from '@/components/domain/grading/buttonLayout';
import ClapComplete from '@/components/domain/grading/clapComplete';
import { useGetUserNames } from '@/apis/queries/user';
import { useParams } from 'react-router-dom';

type CompleteLayoutProps = {
  handleStep: (step: string) => void;
};

export default function NoImage({ handleStep }: CompleteLayoutProps) {
  const {quizid} = useParams();
  const names = useGetUserNames(Number(quizid));
  
  return (
    <div className={$.Wrapper}>
      <div className={$.layout}>
        <ClapComplete />
        <div className={$.text}>
          <Body2>
            채점 결과는 {names.kakao_nickname}님이 직접 확인할 수 있답니다.
            <br /> 다른 사람이 생각하는 내가 궁금하다면?
          </Body2>
        </div>
        <ButtonLayout />
      </div>
    </div>
  );
}
