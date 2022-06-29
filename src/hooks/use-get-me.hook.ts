import { useEffect } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import axiosInstance from '../helpers/axios-instance.helper'
import userStateAtom, { TUserState } from '../recoil/atoms/user.atom'
import useRequest from './use-request.hook'

const useGetMe = (): [
    TUserState,
    (token?: string | undefined) => Promise<void>,
    () => void
] => {
    const [, isLoading, error, doFetch] = useRequest<any>()

    const [userState, setUserState] = useRecoilState(userStateAtom)
    const resetUserState = useResetRecoilState(userStateAtom)

    const getMe = async (token: string | undefined = undefined) => {
        if (token) {
            const response = await doFetch({
                url: '/users/me',
                method: 'GET',
                axiosInstance,
                requestConfig: {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            })

            if (response)
                setUserState(prevState => ({
                    ...prevState,
                    user: response.data,
                }))
        } else {
            setUserState(prevState => ({
                ...prevState,
                user: undefined,
            }))
        }
    }

    const logOut = () => {
        resetUserState()
        localStorage.removeItem('token')
    }

    useEffect(() => {
        setUserState(prevState => ({ ...prevState, isLoading }))
    }, [isLoading])

    useEffect(() => {
        if (error)
            setUserState(prevState => ({
                ...prevState,
                isLoading: false,
                user: undefined,
            }))
    }, [error])

    return [userState, getMe, logOut]
}

export default useGetMe
