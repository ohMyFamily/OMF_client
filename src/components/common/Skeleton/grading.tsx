import $ from './grading.module.scss';
import classNames from 'classnames';
import Skeleton from './Skeleton';

export default function GradingSkeleton() {
  return (
    <div className={classNames($.skeletonWrapper)}>
      <div style={{ paddingBottom: '16px' }}>
        <Skeleton height="330px" borderRadius="12px" />
      </div>
      <Skeleton height="330px" borderRadius="12px" />
    </div>
  );
}
