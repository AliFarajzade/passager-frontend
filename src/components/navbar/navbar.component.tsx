import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useGetMe from '../../hooks/use-get-me.hook'
import AuthButtons from '../auth-buttons/auth-buttons.component'
import LoadingSpinner from '../loading-spinner/loading-spinner.component'

const Navbar = () => {
    const [userState, getMe] = useGetMe()

    const { pathname } = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) getMe(token)
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
                    <div>{userState.user?.name}</div>
                ) : (
                    <AuthButtons />
                )}
            </div>
        </div>
    )
}

export default Navbar
