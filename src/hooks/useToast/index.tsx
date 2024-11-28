import Toast from './Toast';
import Portal from '@/components/common/Portal';
import $ from './toast.module.scss';
import { useToastContext } from './context';

export interface ToastType {
  content: string;
  id: string;
  style?: React.CSSProperties;
}

export function useToast() {
  const { toasts, setToasts } = useToastContext();

  const addToasts = (content: string, style?: React.CSSProperties) => {
    setToasts([...toasts, { content, id: Date.now().toString(), style }]);
  };

  const deleteToast = (id: string) => {
    const filtered = toasts.filter((item) => item.id !== id);
    setToasts(filtered);
  };

  const ToastComponent = () => (
    <Portal>
      <div className={$.toast}>
        {toasts.map((item) => (
          <Toast 
            content={item.content} 
            key={item.id} 
            id={item.id} 
            style={item.style}
            deleteToast={deleteToast}
          />
        ))}
      </div>
    </Portal>
  );

  return { addToasts, ToastComponent } as const;
}