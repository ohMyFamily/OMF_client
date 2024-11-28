import $ from './checkScore.module.scss';
import classNames from 'classnames';
import AppBar from '@/components/common/AppBar';
import { Body2, Title2 } from '@/components/common/Typography';
import AnswerListItem from '@/components/common/Card/AnswerListItem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CheckScoreLayoutType {
  id: number;
  names: string;
  score: number;
  image: string;
  isOpen: boolean;
}

export default function CheckScoreLayout() {
  const navigate = useNavigate();
  const [mockData, setMockData] = useState<CheckScoreLayoutType[]>([
    {
      id: 1,
      names: '다은',
      score: 80,
      image: '',
      isOpen: true,
    },
    {
      id: 2,
      names: '이슬이',
      score: 100,
      image: '',
      isOpen: false,
    },
    {
      id: 4,
      names: '낙현',
      score: 90,
      image: '',
      isOpen: false,
    },
    {
      id: 5,
      names: '먼지',
      score: 60,
      image: '',
      isOpen: false,
    },
  ]);

  const onClickLeftButton = () => {
    navigate(-1);
  };

  const handleItemClick = (id: number, isOpen: boolean) => {
    if (isOpen) {
      // isOpen이 true일 때는 바로 페이지 이동
      navigate(`/check-score/${id}`);
    } else {
      // isOpen이 false일 때는 상태 변경 (서버에 업데이트하고 다시 fetch?)
      setMockData((prevData) =>
        prevData.map((item) => (item.id === id ? { ...item, isOpen: true } : item))
      );
    }
  };

  return (
    <div className={classNames($.Wrapper)}>
      <AppBar leftRole="back" onClickLeftButton={onClickLeftButton} />
      <div className={classNames($.TextContainer)}>
        <Title2>내 점수를 확인할 수 있어요!</Title2>
        <Body2>그 사람에 대해 얼마나 많이 알고 있었을까요?</Body2>
      </div>
      <div className={classNames($.ListContainer)}>
        {mockData.map((item) => (
          <AnswerListItem
            key={item.id}
            id={item.id}
            nickname={item.names}
            score={item.score}
            cardImage={item.image}
            isOpen={item.isOpen}
            handleClick={handleItemClick}
          />
        ))}
      </div>
    </div>
  );
}
