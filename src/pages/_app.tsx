import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Layout from '../components/layout/layout.component'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </RecoilRoot>
    )
}

export default MyApp
