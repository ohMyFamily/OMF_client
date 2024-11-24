import AnimateClap from '@/assets/svg/Tossface/AnimateClap.svg';
import $ from '../grading.module.scss';
import { Title2 } from '@/components/common/Typography';

export default function ClapComplete() {
  return (
    <div className={$.clapComplete}>
      <img src={AnimateClap} alt="박수 이미지" />
      <Title2>채점을 완료했어요!</Title2>
    </div>
  );
}
