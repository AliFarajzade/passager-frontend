import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { RecoilRoot } from 'recoil'
import Layout from '../components/layout/layout.component'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const handleRouteStart = () => NProgress.start()
        const handleRouteDone = () => NProgress.done()

        Router.events.on('routeChangeStart', handleRouteStart)
        Router.events.on('routeChangeComplete', handleRouteDone)
        Router.events.on('routeChangeError', handleRouteDone)

        return () => {
            Router.events.off('routeChangeStart', handleRouteStart)
            Router.events.off('routeChangeComplete', handleRouteDone)
            Router.events.off('routeChangeError', handleRouteDone)
        }
    }, [])

    return (
        <RecoilRoot>
            <Layout>
                <Component {...pageProps} />
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                />
            </Layout>
        </RecoilRoot>
    )
}

export default MyApp
