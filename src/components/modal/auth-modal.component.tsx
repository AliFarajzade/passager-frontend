import { FaGoogle } from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import authModalStateAtom from '../../recoil/atoms/auth-modal.atom'
import AuthModalnputs from './auth-modal-inputs.component'
const AuthModal: React.FC = () => {
    const [authModalState, setAuthModalState] =
        useRecoilState(authModalStateAtom)

    const closeModal = () =>
        setAuthModalState(prevState => ({ ...prevState, open: false }))

    const changeAuthModalState = (state: 'signUp' | 'signIn' | 'forgot') =>
        setAuthModalState(prevState => ({ ...prevState, view: state }))
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
                                <button className="btn border-none text-white bg-red-500 flex items-center">
                                    <FaGoogle className="mr-2" size="15px" />
                                    Sing{' '}
                                    {authModalState.view === 'signIn'
                                        ? 'In'
                                        : 'Up'}{' '}
                                    with Google
                                </button>
                                <div className="divider py-6">OR</div>
                            </>
                        )}
                        <div className="flex flex-col gap-3 mx-auto w-5/6 max-w-xs">
                            {/* Error alert */}
                            <div className="hidden alert alert-error shadow-lg mb-4">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current flex-shrink-0 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>
                                        Error! Task failed successfully.
                                    </span>
                                </div>
                            </div>
                            <AuthModalnputs modalView={authModalState.view} />
                            <button className="btn btn-primary text-white mt-4">
                                {authModalState.view === 'signIn' && 'Sign In'}
                                {authModalState.view === 'signUp' && 'Sign Up'}
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
                                                changeAuthModalState('signIn')
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
                                                changeAuthModalState('signIn')
                                            }
                                        >
                                            Sign In!
                                        </span>
                                    </h5>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthModal
