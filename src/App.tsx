import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { useToast } from './hooks/useToast';
import $ from './App.module.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@/styles/font.scss';
import MetaHead from './components/common/Helmet';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

function App() {
  const { ToastComponent } = useToast();
  const elem = useRoutes(routes);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
  });

  return (
    <>
      <MetaHead />
      <div className={$.Wrapper}>
        <div className={$.ContentWrapper}>
          <QueryClientProvider client={queryClient}>
            {elem}
            <ReactQueryDevtools />
          </QueryClientProvider>
          <ToastComponent />
        </div>
      </div>
    </>
  );
}

export default App;
