import { Dayjs } from 'dayjs'

export interface BaseResponse<T> {
  status: boolean
  data?: T
  code?: number
  message?: string
}

export interface PagingModel<T> {
  page: number
  pageSize: number
  totalRecords: number
  rows: T[]
}

export interface TimestampModel {
  timestamp: string
}

export interface PagingParams {
  page?: number
  pageSize?: number
  order?: string
  sortField?: string
}

export interface IndexSignature {
  [key: string]: string
}

export interface IndexObjectSignature<T = object> {
  [key: string]: T
}

export type IntervalDate = [Dayjs, Dayjs]
