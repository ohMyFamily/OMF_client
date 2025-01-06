// 채점 점수 리스트 타입
export interface ScoreType {
    id: number;
    isCheck: boolean;
    name: string;
    score: string;
    icon: string;
  }
  
  export interface ScoresResponse {
    data: ScoreType[];
  }