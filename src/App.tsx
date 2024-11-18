import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { useToast } from './hooks/useToast';
import $ from './App.module.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const { ToastComponent } = useToast();
  const elem = useRoutes(routes);
  const queryClient = new QueryClient();

  return (
    <div className={$.Wrapper}>
      <QueryClientProvider client={queryClient}>
        {elem}
        <ReactQueryDevtools />
      </QueryClientProvider>
      <ToastComponent />
    </div>
  );
}

export default App;
