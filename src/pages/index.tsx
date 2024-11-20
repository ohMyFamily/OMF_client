import { useNavigate } from 'react-router-dom';
import $ from '../App.module.scss';
import classNames from 'classnames';

const IndexPage = () => {
  const navigate = useNavigate();

  const navigation = [
    { route: '/login', name: '로그인', state: true },
    { route: '/main', name: '자식-메인', state: true },
    { route: '/guide', name: '가이드', state: true },
    { route: '/splash', name: '스플래시스크린', state: false },
    { route: '/test', name: '문제풀기', state: true },
    { route: '/type', name: '부모님 선택', state: true },
    { route: '/check-score', name: '점수 확인', state: true },
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
