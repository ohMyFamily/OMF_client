import { createRoot } from 'react-dom/client';
import App from '@/App';
import './index.scss';
import { ToastProvider } from './hooks/useToast/context';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToastProvider>
  </StrictMode>
);
