import {Filter, RemoteDataState, TimeRange} from 'src/types'

export interface PredicatesState {
  bucketName: string
  deletionStatus: RemoteDataState
  files: string[]
  filters: Filter[]
  isSerious: boolean
  keys: string[]
  previewStatus: RemoteDataState
  timeRange: TimeRange
  values: string[]
}
