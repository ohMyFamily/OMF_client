import { createRoot } from 'react-dom/client';
import App from '@/App';
import './index.scss';
import { ToastProvider } from './hooks/useToast/context';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <ToastProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToastProvider>
);
