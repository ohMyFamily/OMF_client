import { createRoot } from 'react-dom/client';
import App from '@/App';
import './index.scss';
import { ToastProvider } from './hooks/useToast/context';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <BrowserRouter>
        <HelmetProvider context={{}}>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </ToastProvider>
  </StrictMode>
);
