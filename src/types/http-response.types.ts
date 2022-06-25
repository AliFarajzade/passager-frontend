export type THTTPResponse<DataType> = {
    status: 'success' | 'fail'
    results?: number
    data: DataType
}
