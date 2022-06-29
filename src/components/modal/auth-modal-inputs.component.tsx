import { TInputErrors, TInputValues } from './auth-modal.component'

interface IProps {
    modalView: 'signIn' | 'signUp' | 'forgot'
    inputValues: TInputValues
    inputErrors: TInputErrors
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AuthModalnputs: React.FC<IProps> = ({
    modalView,
    handleInputChange,
    inputErrors,
    inputValues,
}) => {
    if (modalView === 'signIn')
        return (
            <>
                <input
                    value={inputValues.email}
                    onChange={handleInputChange}
                    name="email"
                    type="text"
                    placeholder="Email"
                    className={`input input-bordered w-full ${
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
                <input
                    value={inputValues.password}
                    onChange={handleInputChange}
                    name="password"
                    type="password"
                    placeholder="Passowrd"
                    className={`input input-bordered w-full ${
                        inputErrors.password
                            ? 'border-error'
                            : inputValues.password
                            ? 'border-success'
                            : ''
                    }`}
                />
                {inputErrors.password && (
                    <span className="text-sm text-red-500 text-left">
                        Password should be at least 8 characters and contain one
                        special and number character.
                    </span>
                )}
            </>
        )
    else if (modalView === 'signUp')
        return (
            <>
                <input
                    value={inputValues.name}
                    onChange={handleInputChange}
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={`input input-bordered w-full ${
                        inputErrors.name
                            ? 'border-error'
                            : inputValues.name
                            ? 'border-success'
                            : ''
                    }`}
                />
                {inputErrors.name && (
                    <span className="text-sm text-red-500 text-left">
                        Name should only contain white spaces and letters.
                    </span>
                )}
                <input
                    value={inputValues.email}
                    onChange={handleInputChange}
                    name="email"
                    type="text"
                    placeholder="Email"
                    className={`input input-bordered w-full ${
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
                <input
                    value={inputValues.password}
                    onChange={handleInputChange}
                    name="password"
                    type="password"
                    placeholder="Password"
                    className={`input input-bordered w-full ${
                        inputErrors.password
                            ? 'border-error'
                            : inputValues.password
                            ? 'border-success'
                            : ''
                    }`}
                />
                {inputErrors.password && (
                    <span className="text-sm text-red-500 text-left">
                        Password should be at least 8 characters and contain one
                        special and number character.
                    </span>
                )}
                <input
                    value={inputValues.confirmPassword}
                    onChange={handleInputChange}
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Passowrd"
                    className={`input input-bordered w-full ${
                        inputErrors.confirmPassword
                            ? 'border-error'
                            : inputValues.confirmPassword
                            ? 'border-success'
                            : ''
                    }`}
                />
                {inputErrors.confirmPassword && (
                    <span className="text-sm text-red-500 text-left">
                        Passwords do not match.
                    </span>
                )}
            </>
        )
    else if (modalView === 'forgot')
        return (
            <input
                value={inputValues.email}
                onChange={handleInputChange}
                name="email"
                type="text"
                placeholder="Email"
                className={`input input-bordered w-full ${
                    inputErrors.email
                        ? 'border-error'
                        : inputValues.email
                        ? 'border-success'
                        : ''
                }`}
            />
        )
    else return null
}

export default AuthModalnputs
