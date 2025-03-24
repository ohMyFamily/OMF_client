import $ from './skeleton.module.scss';
import classNames from 'classnames';

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Skeleton({
  width,
  height,
  borderRadius = '4px',
  className,
  style,
}: SkeletonProps) {
  return (
    <div
      className={classNames($.skeletonBase, className)}
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        ...style,
      }}
    />
  );
}
