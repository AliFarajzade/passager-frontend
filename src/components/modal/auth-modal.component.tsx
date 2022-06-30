import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaGoogle } from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import axiosInstance from '../../helpers/axios-instance.helper'
import {
    emailRegex,
    onlyASCIIAndWhiteSpaceOrNothingRegex,
    passwordRegex,
} from '../../helpers/regex.helper'
import useGetMe from '../../hooks/use-get-me.hook'
import useRequest from '../../hooks/use-request.hook'
import authModalStateAtom from '../../recoil/atoms/auth-modal.atom'
import { TSignInResponse, TSignUpResponse } from '../../types/auth.types'
import { THTTPResponse } from '../../types/http-response.types'
import AuthModalError from './auth-modal-error.component'
import AuthModalnputs from './auth-modal-inputs.component'

export type TInputValues = {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export type TInputErrors = {
    name: boolean
    email: boolean
    password: boolean
    confirmPassword: boolean
}

const AuthModal: React.FC = () => {
    const [authModalState, setAuthModalState] =
        useRecoilState(authModalStateAtom)

    const [, getMe] = useGetMe()

    const [, isSignUpLoading, signUpError, doSignUp] =
        useRequest<THTTPResponse<TSignUpResponse>>()

    const [, isSigninLoading, signInError, doSignIn] =
        useRequest<TSignInResponse>()

    const isLoading = isSignUpLoading || isSigninLoading
    const isError = signUpError || signInError
    const errorMessage = (() => {
        if (signUpError) {
            if (
                signUpError.response.data.message.startsWith(
                    'Duplicate field error'
                )
            )
                return 'Email already exists.'
            return 'Something went wrong.'
        } else if (signInError) {
            return signInError.response.data.message
        } else return 'Something went wrong.'
    })()

    const [inputValues, setInputValues] = useState<TInputValues>({
        confirmPassword: '',
        email: '',
        name: '',
        password: '',
    })

    const [inputErrors, setInputErrors] = useState<TInputErrors>({
        confirmPassword: false,
        password: false,
        email: false,
        name: false,
    })

    const checkForValidation = (inputName: string, inputValue: string) => {
        if (inputName === 'name')
            if (
                inputValue.length < 2 ||
                !onlyASCIIAndWhiteSpaceOrNothingRegex.test(inputValue)
            )
                setInputErrors({
                    ...inputErrors,
                    [inputName]: true,
                })
            else
                setInputErrors({
                    ...inputErrors,
                    [inputName]: false,
                })
        else if (inputName === 'email')
            if (!emailRegex.test(inputValue))
                setInputErrors({
                    ...inputErrors,
                    [inputName]: true,
                })
            else
                setInputErrors({
                    ...inputErrors,
                    [inputName]: false,
                })
        else if (inputName === 'password')
            if (!passwordRegex.test(inputValue))
                setInputErrors({
                    ...inputErrors,
                    [inputName]: true,
                })
            else
                setInputErrors({
                    ...inputErrors,
                    [inputName]: false,
                })
        else if (inputName === 'confirmPassword')
            if (inputValue !== inputValues.password)
                setInputErrors({
                    ...inputErrors,
                    confirmPassword: true,
                })
            else
                setInputErrors({
                    ...inputErrors,
                    confirmPassword: false,
                })
    }

    const resetInputs = () => {
        setInputValues({
            confirmPassword: '',
            email: '',
            name: '',
            password: '',
        })
        setInputErrors({
            confirmPassword: false,
            password: false,
            email: false,
            name: false,
        })
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Dont let change state on performing request.
        if (isLoading) return
        checkForValidation(e.target.name, e.target.value)
        setInputValues({ ...inputValues, [e.target.name]: e.target.value })
    }

    const closeModal = () => {
        resetInputs()
        setAuthModalState(prevState => ({ ...prevState, open: false }))
    }

    const changeAuthModalState = (state: 'signUp' | 'signIn' | 'forgot') => {
        // Dont let change state on performing request.
        if (isLoading) return
        setAuthModalState(prevState => ({ ...prevState, view: state }))
        resetInputs()
    }

    const handleSignUp = async () => {
        if (
            Object.values(inputErrors).some(value => value) ||
            Object.values(inputValues).some(value => !value)
        )
            return

        const response = await doSignUp({
            url: '/users/register',
            axiosInstance,
            method: 'POST',
            requestConfig: {
                data: {
                    name: inputValues.name,
                    email: inputValues.email,
                    password: inputValues.password,
                    confirmPassword: inputValues.confirmPassword,
                },
            },
        })

        if (response?.token) {
            localStorage.setItem('token', response.token)
            getMe(response.token)
            closeModal()
            toast.success('Successfully signed up!')
        }
    }

    const handleSignIn = async () => {
        if (
            Object.values(inputErrors).some(value => value) ||
            Object.values({
                email: inputValues.email,
                password: inputValues.password,
            }).some(value => !value)
        )
            return

        const response = await doSignIn({
            url: '/users/enter',
            axiosInstance,
            method: 'POST',
            requestConfig: {
                data: {
                    email: inputValues.email,
                    password: inputValues.password,
                },
            },
        })

        if (response?.token) {
            localStorage.setItem('token', response.token)
            getMe(response.token)
            closeModal()
            toast.success('Welcome back!')
        }
    }

    const handleOAuth = () => {
        toast('Cooming soon...', {
            icon: '👷',
        })
    }

    useEffect(() => {
        return () => resetInputs()
    }, [])

    console.log(signInError)

    return (
        <>
            <div className={authModalState.open ? 'modal modal-open' : 'modal'}>
                <div className="modal-box relative  max-w-md">
                    <label
                        htmlFor="my-modal-3"
                        className="btn btn-primary text-white btn-sm btn-circle absolute right-2 top-2"
                        onClick={closeModal}
                    >
                        ✕
                    </label>

                    <div className="flex flex-col text-center">
                        <h1 className="font-bold text-xl">
                            {authModalState.view === 'signIn' && 'Sign In'}
                            {authModalState.view === 'signUp' && 'Sign Up'}
                            {authModalState.view === 'forgot' &&
                                'Forgot Password'}
                        </h1>
                        <div className="divider"></div>
                        {(authModalState.view === 'signIn' ||
                            authModalState.view === 'signUp') && (
                            <>
                                <button
                                    disabled={isLoading}
                                    onClick={handleOAuth}
                                    className="btn border-none text-white bg-red-500 flex items-center"
                                >
                                    <FaGoogle className="mr-2" size="15px" />
                                    Sign{' '}
                                    {authModalState.view === 'signIn'
                                        ? 'In'
                                        : 'Up'}{' '}
                                    with Google
                                </button>
                                <div className="divider py-6">OR</div>
                            </>
                        )}
                        <div className="flex flex-col gap-3 mx-auto w-5/6 max-w-xs">
                            <>
                                {isError && (
                                    <AuthModalError message={errorMessage} />
                                )}
                                <AuthModalnputs
                                    modalView={authModalState.view}
                                    inputValues={inputValues}
                                    inputErrors={inputErrors}
                                    handleInputChange={handleInputChange}
                                />
                                <button
                                    onClick={() => {
                                        if (isLoading) return

                                        if (authModalState.view === 'signUp')
                                            handleSignUp()
                                        else if (
                                            authModalState.view === 'signIn'
                                        )
                                            handleSignIn()
                                    }}
                                    className={`btn btn-primary text-white mt-4 ${
                                        isLoading && 'loading'
                                    }`}
                                >
                                    {authModalState.view === 'signIn' &&
                                        'Sign In'}
                                    {authModalState.view === 'signUp' &&
                                        'Sign Up'}
                                    {authModalState.view === 'forgot' &&
                                        'Reset Password'}
                                </button>

                                <div className="pt-5 space-y-4 text-gray-600">
                                    {authModalState.view === 'signIn' && (
                                        <>
                                            <h5>
                                                New to Passager?{' '}
                                                <span
                                                    className="link link-secondary"
                                                    onClick={() =>
                                                        changeAuthModalState(
                                                            'signUp'
                                                        )
                                                    }
                                                >
                                                    Sign Up!
                                                </span>
                                            </h5>
                                            <h5>
                                                Forgot your password?{' '}
                                                <span
                                                    className="link link-secondary"
                                                    onClick={() =>
                                                        changeAuthModalState(
                                                            'forgot'
                                                        )
                                                    }
                                                >
                                                    Reset Password.
                                                </span>
                                            </h5>
                                        </>
                                    )}
                                    {authModalState.view === 'signUp' && (
                                        <h5>
                                            Already registered?{' '}
                                            <span
                                                className="link link-secondary"
                                                onClick={() =>
                                                    changeAuthModalState(
                                                        'signIn'
                                                    )
                                                }
                                            >
                                                Sign In!
                                            </span>
                                        </h5>
                                    )}
                                    {authModalState.view === 'forgot' && (
                                        <h5>
                                            <span
                                                className="link link-secondary"
                                                onClick={() =>
                                                    changeAuthModalState(
                                                        'signIn'
                                                    )
                                                }
                                            >
                                                Sign In!
                                            </span>
                                        </h5>
                                    )}
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthModal
