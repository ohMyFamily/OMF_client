import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { useToast } from './hooks/useToast';

function App() {
  const { ToastComponent } = useToast();
  const elem = useRoutes(routes);
  return (
    <>
      {elem}
      <ToastComponent />
    </>
  );
}

export default App;
