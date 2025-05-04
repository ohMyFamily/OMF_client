import { Body2 } from '../Typography';
import $ from './spinner.module.scss';

interface SpinnerProps {
  showDescription?: boolean;
}

export default function Spinner({ showDescription }: SpinnerProps) {
  return (
    <div className={$.container}>
      <div className={$.spinner} />
      {showDescription && <Body2>페이지를 불러오고 있어요!</Body2>}
    </div>
  );
}
