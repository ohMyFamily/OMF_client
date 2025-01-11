import $ from './checkScore.module.scss';
import classNames from 'classnames';
import AppBar from '@/components/common/AppBar';
import { Body3, Title2 } from '@/components/common/Typography';
import AnswerListItem from '@/components/common/Card/AnswerListItem';
import { useNavigate } from 'react-router-dom';
import { useScoreList } from '@/apis/queries/score';
import EmptyScoreLayout from './emptyScore';
import { ScoreType } from '@/apis/api/score.type';

export default function CheckScoreLayout() {
  const navigate = useNavigate();
  const scoreList = useScoreList();

  const onClickLeftButton = () => {
    navigate(-1);
  };

  const handleItemClick = (id: number) => {
    navigate(`/check-score/${id}`);
  };

  // 채점 결과가 없을 때 
  if (!scoreList || scoreList.length === 0) {
    return (
      <div className={classNames($.Wrapper)}>
        <AppBar leftRole="back" onClickLeftButton={onClickLeftButton} />
        <EmptyScoreLayout />
      </div>
    );
  }

  return (
    <div className={classNames($.Wrapper)}>
      <AppBar leftRole="back" onClickLeftButton={onClickLeftButton} />
      <div className={classNames($.Container)}>
        <div className={classNames($.TextContainer)}>
          <Title2>내 점수를 확인할 수 있어요!</Title2>
          <Body3>그 사람에 대해 얼마나 많이 알고 있었을까요?</Body3>
        </div>
        <div className={classNames($.ListContainer)}>
          {scoreList?.map((item: ScoreType) => (
            <AnswerListItem
              key={item.id}
              id={item.id}
              name={item.name}
              score={Number(item.score)}
              icon={item.icon}
              isOpen={item.isCheck}
              handleClick={handleItemClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
