import CheckScore from './pages/check-score';
import CheckScoreDetail from './pages/check-score/detail';
import Guide from './pages/guide';
import Login from './pages/login';
import Main from './pages/main';
import Grading from './pages/grading';
import Splash from './pages/splash';
import Layout from '@/pages/_layout';
import HomePage from '@/pages/homepage';
import Redirection from '@/pages/redirection';
import Test from './pages/test';
import EmptyScoreLayout from './container/check-score/emptyScore';
import GradingSkeletonLayout from './container/skeleton/grading';
import ScoreSkeletonLayout from './container/skeleton/score';
import EncryptedRedirect from './pages/encryptedRedirect';

export const routes = [
  {
    element: <Layout />,
    path: '/',
    children: [
      { path: '', element: <Splash /> },
      { path: 'homepage', element: <HomePage /> },
      {
        path: 'check-score',
        children: [
          { index: true, element: <CheckScore /> },
          { path: ':id', element: <CheckScoreDetail /> },
        ],
      },
      { path: 'empty', element: <EmptyScoreLayout /> },
      // 임시
      { path: 'detail', element: <CheckScoreDetail /> },
      { path: 'guide', element: <Guide /> },
      { path: 'login', element: <Login /> },
      { path: 'kakao/callback', element: <Redirection /> },
      { path: 'encrypted', element: <EncryptedRedirect /> },
      { path: 'main', element: <Main /> },
      { path: 'test', element: <Test /> },
      {
        path: 'grading/:quizid',
        element: <Grading />,
      },
      { path: 'splash', element: <Splash /> },
      { path: 'scoreSkeleton', element: <ScoreSkeletonLayout /> },
      { path: 'gradingSkeleton', element: <GradingSkeletonLayout /> },
    ],
  },
];
