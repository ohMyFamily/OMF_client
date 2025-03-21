import { Angel } from '../TossFace';
import { Body2 } from '../Typography';
import $ from './spinner.module.scss';

export default function Spinner() {
  return (
    <div className={$.container}>
      <div className={$.spinner} />
      <Body2>페이지를 불러오고 있어요!</Body2>
    </div>
  );
}
