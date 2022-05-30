import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { themeChange } from 'theme-change'

const Navbar = () => {
    const [theme, setTheme] = useState<'dark' | 'emerald'>('emerald')

    const handleChangeTheme = () =>
        setTheme(prevState => (prevState === 'emerald' ? 'dark' : 'emerald'))

    useEffect(() => {
        themeChange(false)
    }, [theme])

    // For changing theme
    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    console.log('Navbar')

    return (
        <div className="bg-base-100 border-b-2 navbar">
            <div className="navbar-start">
                {/* TODO: Add logo instead of text */}
                <button className="btn btn-ghost normal-case text-xl">
                    <Link href="/">Passager</Link>
                </button>
            </div>
            <div className="navbar-center space-x-3 hidden lg:block">
                {/* TODO: Add links */}
                <button className="btn btn-ghost">Tours</button>
                <button className="btn btn-ghost">Guides</button>
                <button className="btn btn-ghost">Features</button>
                <button className="btn btn-ghost">Contact</button>
            </div>

            <div className="navbar-end space-x-4">
                <button className="btn btn-outline w-max">Sign In</button>
                <button className="btn btn-primary w-max">Sign Up</button>

                <div className="flex gap-2">
                    <input
                        onChange={handleChangeTheme}
                        type="checkbox"
                        className="toggle"
                    />
                    {theme === 'emerald' ? (
                        <BiSun size="1.5em" />
                    ) : (
                        <BiMoon size="1.5em" />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
