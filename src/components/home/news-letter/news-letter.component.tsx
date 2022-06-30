import { useState } from 'react'
import toast from 'react-hot-toast'
import {
    emailRegex,
    onlyASCIIAndWhiteSpaceOrNothingRegex,
} from '../../../helpers/regex.helper'

const NewsLetter: React.FC = () => {
    const [inputValues, setInputValues] = useState<{
        name: string
        email: string
    }>({
        name: '',
        email: '',
    })

    const [inputErrors, setInputErrors] = useState<{
        name: boolean
        email: boolean
    }>({
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
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        checkForValidation(e.target.name, e.target.value)
        setInputValues({ ...inputValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        if (
            Object.values(inputErrors).some(value => value) ||
            Object.values(inputValues).some(value => !value)
        )
            return

        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res('Success')
                setInputValues({ name: '', email: '' })
            }, 1000)
        })

        toast.promise(promise, {
            loading: 'Submitting...',
            success: <b>Submited!</b>,
            error: <b></b>,
        })
    }

    return (
        <section className="p-4 sm:py-32 sm:px-10 bg-gradient-to-br from-lightGreen to-darkGreen flex justify-center items-center">
            <div className="newsletter">
                <h1 className="gradient-title mb-12">Join our newsletter</h1>
                <div className="flex flex-col gap-6 mb-10 w-full">
                    <input
                        onChange={handleInputChange}
                        value={inputValues.name}
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className={`input w-full max-w-xs input-bordered ${
                            inputErrors.name
                                ? 'border-error'
                                : inputValues.name
                                ? 'border-success'
                                : ''
                        }`}
                    />
                    {inputErrors.name && (
                        <span className="text-sm text-red-500 text-left max-w-xs">
                            Only whitespaces and letters are allowed, should be
                            at least 2 characters long.
                        </span>
                    )}
                    <input
                        onChange={handleInputChange}
                        value={inputValues.email}
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        className={`input w-full max-w-xs input-bordered ${
                            inputErrors.email
                                ? 'border-error'
                                : inputValues.email
                                ? 'border-success'
                                : ''
                        }`}
                    />
                    {inputErrors.email && (
                        <span className="text-sm text-red-500 text-left">
                            Email is not valid.
                        </span>
                    )}
                </div>
                <button
                    onClick={handleSubmit}
                    className="btn btn-outline btn-primary"
                >
                    Submit
                </button>
            </div>
        </section>
    )
}

export default NewsLetter
