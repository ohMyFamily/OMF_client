import MainIllust from '@/assets/svg/MainIllust.svg';
import classNames from 'classnames';
import $ from './backgroundSVG.module.scss';

export default function BackgroundSVG() {
  return <img src={MainIllust} className={classNames($.BackgroundSvg)} alt="메인 일러스트" />;
}
