import { Angel } from '../TossFace';
import $ from './spinner.module.scss';

export default function Spinner() {
  return (
    <div className={$.container}>
      <img className={$.angel} src={Angel} />
      <div className={$.spinner} />
    </div>
  );
}
