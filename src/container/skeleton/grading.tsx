import $ from './grading.module.scss';
import classNames from 'classnames';
import Skeleton from '../../components/common/Skeleton';
import AppBar from '../../components/common/AppBar';
import { useNavigate } from 'react-router-dom';

export default function GradingSkeletonLayout() {
  const navigate = useNavigate();

  const onClickLeftButton = () => {
    navigate('/guide');
  };

  return (
    <div className={$.layout}>
      <AppBar leftRole="back" onClickLeftButton={onClickLeftButton} />
      <div className={$.Wrapper}>
        <div className={classNames($.skeletonWrapper)}>
          <div style={{ paddingBottom: '16px' }}>
            <Skeleton height="330px" borderRadius="12px" />
          </div>
          <Skeleton height="330px" borderRadius="12px" />
        </div>
      </div>
    </div>
  );
}
