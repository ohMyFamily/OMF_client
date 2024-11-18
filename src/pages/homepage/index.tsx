import { useState } from 'react';
import { useFunnel } from '@/hooks/useFunnel';

const HomePage = () => {
  const [text, setText] = useState<string>('zz');
  const [text1, setText1] = useState<string>('ss');

  const STEPS = ['1', '2', '3', '4'] as const;

  const funnelData = {
    step1: [text, setText] as [string, typeof setText],
    step2: [text1, setText1] as [string, typeof setText1],
  };
  const { FunnelComponent, handleStep, currentStep } = useFunnel(STEPS, funnelData);

  return (
    <>
      <button onClick={() => handleStep('1')}>1</button>
      <button onClick={() => handleStep('2')}>2</button>
      <button onClick={() => handleStep('3')}>3</button>
      <button onClick={() => handleStep('4')}>4</button>
      <FunnelComponent>
        <FunnelComponent.Steps name="1">1단계</FunnelComponent.Steps>
        <FunnelComponent.Steps name="2">2단계</FunnelComponent.Steps>
        <FunnelComponent.Steps name="3">3단계</FunnelComponent.Steps>
        <FunnelComponent.Steps name="4">4단계</FunnelComponent.Steps>
      </FunnelComponent>
    </>
  );
};

export default HomePage;