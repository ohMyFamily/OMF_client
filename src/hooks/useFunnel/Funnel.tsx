import { FunnelContext } from './context';
import { FunnelContextType, FunnelData, FunnelStep } from './type';

type FunnelComponentProps<T extends FunnelStep, D extends Record<string, unknown>> = {
  children: React.ReactNode;
  currentStep: T;
  data: FunnelData<D>;
};

export const Funnel = <T extends FunnelStep, D extends Record<string, unknown>>({
  children,
  currentStep,
  data,
}: FunnelComponentProps<T, D>) => {
  return (
    <FunnelContext.Provider
      value={{ currentStep, data } as FunnelContextType<string, Record<string, unknown>>}
    >
      {children}
    </FunnelContext.Provider>
  );
};
