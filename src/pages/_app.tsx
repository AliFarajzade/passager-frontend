import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from 'recoil'
import Layout from '../components/layout/layout.component'
import axiosInstance from '../helpers/axios-instance.helper'
import { printASCII } from '../helpers/print-ascii.helper'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Print art in console
        printASCII()

        // NProgress
        const handleRouteStart = () => NProgress.start()
        const handleRouteDone = () => NProgress.done()

        Router.events.on('routeChangeStart', handleRouteStart)
        Router.events.on('routeChangeComplete', handleRouteDone)
        Router.events.on('routeChangeError', handleRouteDone)

        // Waking Heroku server up.
        ;(async () => {
            await axiosInstance.get('/tours').then(res => res)
        })()

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
                <Toaster />
            </Layout>
        </RecoilRoot>
    )
}

export default MyApp
