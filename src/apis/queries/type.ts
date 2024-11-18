import { UseQueryResult } from "@tanstack/react-query";

export interface ApiResponseFormat<T> {
    result: T;
    statusCode: number;
  }

export interface sampleType {
    id: number;
    title: string;
    body: string;
}

export type ApiResponse = ApiResponseFormat<sampleType[]>;

export type useGetSampleType = UseQueryResult<ApiResponse, Error>;