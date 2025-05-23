import { useNavigate } from 'react-router-dom';
import $ from '../App.module.scss';
import classNames from 'classnames';

const IndexPage = () => {
  const navigate = useNavigate();

  const navigation = [
    { route: '/login', name: '로그인', state: false },
    { route: '/main', name: '자식-메인', state: false },
    { route: '/guide', name: '가이드', state: false },
    { route: '/splash', name: '스플래시스크린', state: false },
    { route: '/test', name: '문제풀기', state: false },
    { route: '/check-score', name: '점수 확인', state: false },
    { route: '/grading?userId=1&nickname=낙현', name: '채점하기', state: false },
    { route: '/gradingSkeleton', name: '채점 스켈레톤', state: false },
    { route: '/scoreSkeleton', name: '점수 확인 스켈레톤', state: false },
  ];

  return (
    <>
      <div className={$.Wrapper}>
        <div className={$.navigation}>
          <h1>임시 네비게이션</h1>
          {navigation.map((item) => {
            return (
              <button
                className={classNames($.navigationButton, { [$.state]: !item.state })}
                onClick={() => navigate(item.route)}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default IndexPage;
