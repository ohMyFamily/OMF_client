import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { useToast } from './hooks/useToast';
import $ from './App.module.scss';

function App() {
  const { ToastComponent } = useToast();
  const elem = useRoutes(routes);
  return (
    <div className={$.Wrapper}>
      {elem}
      <ToastComponent />
    </div>
  );
}

export default App;
