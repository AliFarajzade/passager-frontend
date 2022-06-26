import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

type TAxiosConfig = {
    axiosInstance: AxiosInstance
    method: 'get' | 'post' | 'patch' | 'put' | 'delete'
    url: string
    requestConfig: AxiosRequestConfig
}

const useRequest = <DataType>(): [
    DataType | null,
    boolean,
    unknown | null,
    (configObject: TAxiosConfig) => Promise<undefined | DataType>
] => {
    const [data, setData] = useState<DataType | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<unknown | null>(null)
    const [controller, setController] = useState<AbortController | null>(null)

    const doRequest = async (configObject: TAxiosConfig) => {
        const ctrl = new AbortController()
        setController(ctrl)
        setError(null)
        const { axiosInstance, method, requestConfig, url } = configObject
        try {
            setIsLoading(true)
            const response = (await axiosInstance[method](url, {
                signal: ctrl.signal,
                ...requestConfig,
            })) as AxiosResponse<DataType, any>
            setData(response.data)
            return response.data
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        return () => controller?.abort()
    }, [controller])

    return [data, isLoading, error, doRequest]
}

export default useRequest
