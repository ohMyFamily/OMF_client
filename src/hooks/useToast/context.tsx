/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useState } from 'react';
import { ToastType } from '.';

interface ToastContextType {
  toasts: ToastType[];
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToastContext = () => {
  const context = useContext(ToastContext);

  if (!context) throw Error('Toast Provider 내에서만 사용 가능합니다');

  return context;
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const contextValue: ToastContextType = { toasts, setToasts };

  return <ToastContext.Provider value={contextValue}>{children}</ToastContext.Provider>;
};
