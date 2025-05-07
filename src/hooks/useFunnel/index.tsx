import { useCallback, useEffect, useState } from 'react';
import { Funnel } from './Funnel';
import { Step } from './Step';
import { FunnelData } from './type';

export const useFunnel = <T extends readonly string[], D extends Record<string, unknown>>(
  steps: T,
  data: FunnelData<D>
) => {
  //현재 퍼널 단계
  const [currentStep, setCurrentStep] = useState<T[number]>(steps[0]);

  //웹 자체 뒤로가기 버튼 클릭 이벤트 발생 시 funnel 과 연동하는 로직
  useEffect(() => {
    if (!window.history.state) {
      window.history.replaceState({ step: steps[0] }, '');
    }

    const handlePopState = (event: PopStateEvent) => {
      const targetStep = event.state?.step;

      if (targetStep && steps.includes(targetStep)) {
        setCurrentStep(targetStep);
      } else {
        const currentIndex = steps.indexOf(currentStep);
        if (currentIndex > 0) {
          const previousStep = steps[currentIndex - 1];
          setCurrentStep(previousStep);
          window.history.replaceState({ step: previousStep }, '');
        } else {
          setCurrentStep(steps[0]);
          window.history.replaceState({ step: steps[0] }, '');
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [steps]);

  //다른 단계로 이동하는 onClick함수
  const handleStep = useCallback(
    (step: T[number]) => {
      const currentIndex = steps.indexOf(currentStep);
      const targetIndex = steps.indexOf(step);

      if (!steps.includes(step)) return;
      if (targetIndex > currentIndex) {
        window.history.pushState({ step, timestamp: Date.now() }, '');
      } else {
        window.history.replaceState({ step }, '');
      }
      setCurrentStep(step);
    },
    [steps]
  );

  //퍼널 컴포넌트
  const FunnelComponent = ({ children }: { children: React.ReactNode }) => {
    return (
      <Funnel currentStep={currentStep} data={data}>
        {children}
      </Funnel>
    );
  };

  FunnelComponent.Steps = Step;

  return { FunnelComponent, handleStep, currentStep };
};
