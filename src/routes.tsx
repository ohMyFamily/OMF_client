import Layout from '@/pages/_layout';
import HomePage from '@/pages/homepage';
import Index from '@/pages/index';

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
