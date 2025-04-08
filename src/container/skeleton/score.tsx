import $ from './score.module.scss';
import classNames from 'classnames';
import Skeleton from '../../components/common/Skeleton';
import AppBar from '../../components/common/AppBar';
import { useNavigate } from 'react-router-dom';

export default function ScoreSkeletonLayout() {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className={$.layout}>
      <AppBar leftRole="back" onClickLeftButton={onBack} />
      <div className={$.Wrapper}>
        <div className={classNames($.skeletonWrapper)}>
          <div className={classNames($.Container)}>
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
      </div>
    </div>
  );
}
