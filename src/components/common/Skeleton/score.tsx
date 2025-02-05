import $ from './score.module.scss';
import classNames from 'classnames';
import Skeleton from './Skeleton';

export default function ScoreSkeleton() {
  return (
    <div className={classNames($.skeletonWrapper)}>
      <div className={classNames($.Wrapper)}>
        <Skeleton
          width="82px"
          height="28px"
          borderRadius="14px"
          style={{
            marginBottom: '12px',
          }}
        />
        <Skeleton
          width="170px"
          height="28px"
          borderRadius="14px"
          style={{
            marginBottom: '42px',
          }}
        />
      </div>
      <Skeleton height="454px" borderRadius="8px" />
    </div>
  );
}
