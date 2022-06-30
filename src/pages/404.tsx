import { NextPage } from 'next'
import GeneralNotFound from '../components/general-not-found/general-not-found.component'
import SEO from '../components/SEO/SEO.component'

const NotFound: NextPage = () => {
    return (
        <>
            <SEO
                title="Page not Found | 404"
                description="Page not Found | 404"
                image="/images/logo-gradient.png"
            />
            <GeneralNotFound
                message="This page does not exists"
                btnMessage="Return to home page"
                redirect="/"
            />
        </>
    )
}

export default NotFound
