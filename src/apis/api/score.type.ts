// 채점 점수 리스트 타입
export interface ScoreType {
  id: number;
  ischeck: boolean;
  name: string;
  score: string;
  icon: string;
}

export interface ScoresResponse {
  data: ScoreType[];
}

// 채점 결과 상세 정보 타입
export interface ScoreDetailType {
    id: number;
    score: number;
    icon: string;
    title: string;
    subtitle: string;
    content: string;
    name: string;
  }
  
  export type ScoreDetailResponse = ScoreDetailType;


