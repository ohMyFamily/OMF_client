import { scoreTable } from '@/constants/business.constants';

const getScoreInfo = (score: number) => {
  if (score <= 20) return scoreTable[0];
  if (score <= 40) return scoreTable[1];
  if (score <= 60) return scoreTable[2];
  if (score <= 80) return scoreTable[3];
  if (score <= 90) return scoreTable[4];
  return scoreTable[5];
};

export default getScoreInfo;
