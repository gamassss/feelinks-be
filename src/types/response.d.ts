export interface ResponseFormat<T> {
  code: number;
  message: string;
  data: T
}