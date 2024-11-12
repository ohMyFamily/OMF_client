import { scoreImages } from '@/constants/business.constants';

export interface ScoreInfo {
  imageKey: keyof typeof scoreImages;
  title: string;
  description: string;
}

export interface ResultCardProps {
  score: number;
  variant: 'score' | 'animate';
  isHas?: boolean;
}
