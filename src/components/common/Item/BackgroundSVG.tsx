import Main from '@/assets/image/main.png';
import classNames from 'classnames';
import $ from './backgroundSVG.module.scss';

interface BackgroundSvgProps {
  className?: string;
}
export default function BackgroundSVG({ className }: BackgroundSvgProps) {
  return <img src={Main} className={classNames($.BackgroundSvg, className)} alt="메인 일러스트" />;
}
