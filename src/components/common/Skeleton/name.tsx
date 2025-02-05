import $ from './name.module.scss';
import classNames from 'classnames';
import Skeleton from './Skeleton';

export default function NameSkeleton() {
  return (
    <div className={classNames($.skeletonWrapper)}>
      <div className={classNames($.Wrapper)}>
        <div>
          <div className={classNames($.container)}>
            <Skeleton
              width="82px"
              height="82px"
              borderRadius="41px"
              style={{
                marginBottom: '21px',
              }}
            />
            <Skeleton
              width="256px"
              height="28px"
              borderRadius="14px"
              style={{
                marginBottom: '12px',
              }}
            />
            <Skeleton width="186px" height="28px" borderRadius="14px" />
          </div>

          <div className={classNames($.inputWrapper)}>
            <Skeleton width="132px" height="16px" borderRadius="8px" />
            <div className={classNames($.input)}>
              <Skeleton height="56px" borderRadius="8px" />
            </div>
          </div>
        </div>

        <Skeleton height="56px" borderRadius="28px" />
      </div>
    </div>
  );
}
