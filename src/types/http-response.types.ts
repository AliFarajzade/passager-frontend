export type THTTPResponse<DataType> = {
    status: 'success' | 'fail'
    total?: number
    results?: number
    data: DataType
    token?: string
}
