import { createContext, useContext } from 'react';
import { FunnelContextType, FunnelStep } from './type';

export const FunnelContext = createContext<FunnelContextType<
  FunnelStep,
  Record<string, unknown>
> | null>(null);

export const useFunnelContext = <T extends FunnelStep, D extends Record<string, unknown>>() => {
  const context = useContext(FunnelContext) as FunnelContextType<T, D> | null;

  if (!context) {
    throw new Error('퍼널 Context는 Funnel Provider 내에서 사용할 수 있습니다.');
  }
  return context;
};
