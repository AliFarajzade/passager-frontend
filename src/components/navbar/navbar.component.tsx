import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useGetMe from '../../hooks/use-get-me.hook'
import AuthButtons from '../auth-buttons/auth-buttons.component'
import LoadingSpinner from '../loading-spinner/loading-spinner.component'
import NoAvatar from '../no-avatar/no-avatar.component'
import UserAvatar from '../user-avatar/user-avatar.component'

const Navbar = () => {
    const [userState, getMe, signOut] = useGetMe()

    const { pathname } = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) getMe(token)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="bg-base-100 border-b-2 navbar">
            <div className="navbar-start">
                {/* TODO: Add logo instead of text */}
                <button className="btn btn-ghost normal-case text-xl">
                    <Link href="/">Passager</Link>
                </button>
            </div>
            <div className="navbar-center space-x-3 hidden lg:block">
                {pathname === '/' && (
                    <>
                        <Link href="/tours">
                            <button className="btn btn-ghost">Tours</button>
                        </Link>
                        <a className="btn btn-ghost" href="#guides">
                            Guides
                        </a>
                        <a className="btn btn-ghost" href="#features">
                            Features
                        </a>
                        <Link href="/contact">
                            <button className="btn btn-ghost">Contact</button>
                        </Link>
                    </>
                )}
            </div>

            <div className="navbar-end space-x-4">
                {userState.isLoading ? (
                    <div className="flex justify-center items-center w-[48px] h-[48px]">
                        <LoadingSpinner />
                    </div>
                ) : userState.user ? (
                    <div className="dropdown dropdown-end">
                        {userState.user.photo ? (
                            <div
                                className="flex gap-2 items-center cursor-pointer select-none"
                                tabIndex={0}
                            >
                                <div className="w-12 h-12">
                                    <UserAvatar
                                        name={userState.user.name}
                                        photo={userState.user.photo}
                                    />
                                </div>
                                <div>
                                    <svg
                                        tabIndex={0}
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </div>
                            </div>
                        ) : (
                            <div
                                className="flex gap-2 items-center cursor-pointer select-none"
                                tabIndex={0}
                            >
                                <div className="w-12 h-12">
                                    <NoAvatar name={userState.user.name} />
                                </div>
                                <div>
                                    <svg
                                        tabIndex={0}
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </div>
                            </div>
                        )}
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow rounded-box w-52 bg-slate-100 dark:bg-white"
                        >
                            <li onClick={signOut}>
                                <label>Sign out</label>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <AuthButtons />
                )}
            </div>
        </div>
    )
}

export default Navbar
