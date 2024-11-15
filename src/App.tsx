import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { useToast } from './hooks/useToast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const { ToastComponent } = useToast();
  const elem = useRoutes(routes);
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {elem}
        <ReactQueryDevtools />
      </QueryClientProvider>
      <ToastComponent />
    </>
  );
}

export default App;
