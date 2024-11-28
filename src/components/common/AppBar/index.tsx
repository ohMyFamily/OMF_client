import $ from './appbar.module.scss';
import ArrowLeft from '@/assets/svg/ArrowLeft.svg';
import X from '@/assets/svg/X.svg';
import classNames from 'classnames';

interface AppBarProps {
  leftRole?: 'back';
  rightRole?: 'close';
  onClickLeftButton?: () => void;
  onClickRightButton?: () => void;
  className?: string;
}

export default function AppBar({
  leftRole,
  rightRole,
  onClickLeftButton,
  onClickRightButton,
  className,
}: AppBarProps) {
  return (
    <div className={classNames($.layout, className)}>
      {/* //뒤로가기 버튼의 경우 */}
      {leftRole === 'back' && <img src={ArrowLeft} onClick={onClickLeftButton} />}
      {/* //모달 끄기의 경우 */}
      {rightRole === 'close' && <img src={X} onClick={onClickRightButton} />}
    </div>
  );
}
