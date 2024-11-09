import GlobalLayout from './pages/_layout';
import Index from '@/pages/index';
import HomePage from '@/pages/homepage';

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Index /> },
      { path: '/homepage', element: <HomePage /> },
    ],
  },
];

export const pages = [{ route: '/' }, { route: '/homepage' }];
