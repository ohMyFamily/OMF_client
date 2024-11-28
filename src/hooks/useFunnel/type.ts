export type FunnelStep = string;

export type StateAndSetter<T> = readonly [T, (value: T | ((prev: T) => T)) => void];

export type FunnelData<T extends Record<string, unknown>> = {
    [K in keyof T]: StateAndSetter<T[K]>;
  };

 
export type FunnelContextType<T extends FunnelStep, D extends Record<string, unknown>> = {
  currentStep: T;
  data: FunnelData<D>;
};