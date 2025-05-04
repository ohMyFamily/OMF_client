import { Suspense, useState } from 'react';
import { useFunnel } from '@/hooks/useFunnel';
import EnterNameLayout from '@/container/test/enterName';
import QuestionLayout from '@/container/test/question';
import SelectTypeLayout from '@/container/test/selectType';
import TestCompletedLayout from '@/container/test/done';
import Spinner from '@/components/common/Spinner';
import { PersonType } from '@/constants/business.constants';

export interface QuestionLayoutType {
  id?: number;
  type?: 'input' | 'select' | 'number' | 'upload';
  content: string[] | string;
  title: string;
  icon?: string;
}

function Test() {
  const steps = ['선택', '애칭', '질문', '완료'];
  const [selectedType, setSelectedType] = useState<PersonType>('mom');
  const [selectedImage, setSelectedImage] = useState<FormData | null>(null);
  const [quizid, setQuizid] = useState<string>();
  const [name, setName] = useState<string>(''); //애칭

  const { FunnelComponent: Funnel, handleStep } = useFunnel(steps, {});

  const handleSetSelectedType = (type: string) => {
    if (type === 'mom' || type === 'dad' || type === 'others') {
      setSelectedType(type);
    }
  };

  return (
    <Funnel>
      <Funnel.Steps name="선택">
        <SelectTypeLayout handleStep={handleStep} setSelectedType={handleSetSelectedType} />
      </Funnel.Steps>
      <Funnel.Steps name="애칭">
        <EnterNameLayout person={selectedType} handleStep={handleStep} setName={setName} />
      </Funnel.Steps>
      <Funnel.Steps name="질문">
        <Suspense fallback={<Spinner />}>
          <QuestionLayout
            handleStep={handleStep}
            name={name}
            familyType={selectedType}
            setQuizid={setQuizid}
          />
        </Suspense>
      </Funnel.Steps>
      <Funnel.Steps name="완료">
        <TestCompletedLayout nickname={name} quizid={quizid!} handleStep={handleStep} />
      </Funnel.Steps>
    </Funnel>
  );
}

export default Test;