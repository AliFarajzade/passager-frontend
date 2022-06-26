import { NextPage } from 'next'
import GeneralNotFound from '../components/general-not-found/general-not-found.component'

const NotFound: NextPage = () => {
    return (
        <GeneralNotFound
            message="This page does not exists"
            btnMessage="Return to home page"
            redirect="/"
        />
    )
}

export default NotFound
