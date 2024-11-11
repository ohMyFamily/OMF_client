/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';

const Layout = lazy(() => import('@/pages/_layout'));
const HomePage = lazy(() => import('@/pages/homepage'));
const Index = lazy(() => import('@/pages/index'));

export const routes = [
  {
    element: <Layout />,
    path: '/',
    children: [
      { path: '', element: <Index /> },
      { path: 'homepage', element: <HomePage /> },
    ],
  },
];
