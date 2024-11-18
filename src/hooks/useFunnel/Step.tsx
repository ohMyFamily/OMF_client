import { useFunnelContext } from './context';
import { FunnelStep } from './type';

type StepProps<T extends FunnelStep> = {
  children: React.ReactNode;
  name: T;
};

export const Step = <T extends string>({ children, name }: StepProps<T>) => {
  const { currentStep } = useFunnelContext();
  if (name !== currentStep) return null;
  return <>{children}</>;
};
