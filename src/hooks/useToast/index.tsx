import Toast from './Toast';
import Portal from '@/components/common/Portal';
import $ from './toast.module.scss';
import { useToastContext } from './context';

export interface ToastType {
  content: string;
  id: string;
}

export function useToast() {
  const { toasts, setToasts } = useToastContext();

  const addToasts = (content: string) => {
    setToasts([...toasts, { content, id: Date.now().toString() }]);
  };

  const deleteToast = (id: string) => {
    const filterd = toasts.filter((item) => item.id !== id);
    setToasts(filterd);
  };

  const ToastComponent = () => (
    <Portal>
      <div className={$.toast}>
        {toasts.map((item) => (
          <Toast content={item.content} key={item.id} id={item.id} deleteToast={deleteToast} />
        ))}
      </div>
    </Portal>
  );

  return { addToasts, ToastComponent } as const;
}
