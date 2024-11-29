export interface ApiResponseFormat<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  data: T;
}
