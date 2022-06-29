import { useSetRecoilState } from 'recoil'
import authModalStateAtom from '../../recoil/atoms/auth-modal.atom'

const AuthButtons: React.FC = () => {
    const setAuthModalState = useSetRecoilState(authModalStateAtom)

    const openAuthModalAsSignIn = () =>
        setAuthModalState(prevState => ({
            ...prevState,
            open: true,
            view: 'signIn',
        }))
    const openAuthModalAsSignUp = () =>
        setAuthModalState(prevState => ({
            ...prevState,
            open: true,
            view: 'signUp',
        }))

    return (
        <>
            <button
                className="btn btn-outline w-max hidden sm:flex"
                onClick={openAuthModalAsSignIn}
            >
                Sign In
            </button>
            <button
                className="btn btn-primary text-white w-max hidden sm:flex"
                onClick={openAuthModalAsSignUp}
            >
                Sign Up
            </button>

            <div className="dropdown dropdown-end sm:hidden">
                <label tabIndex={0} className="btn btn-ghost m-1 mr-3">
                    <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                    >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow rounded-box w-52 bg-slate-100 dark:bg-white"
                >
                    <li onClick={openAuthModalAsSignIn}>
                        <label htmlFor="my-modal-3">Sign In</label>
                    </li>
                    <li onClick={openAuthModalAsSignUp}>
                        <label htmlFor="my-modal-3">Sign Up</label>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default AuthButtons
