import type { NextPage } from 'next'
import HomeHero from '../components/home/home-hero.component'

const Home: NextPage = () => {
    return (
        <div className="lg:p-8">
            <div className="bg-gray-100">
                <HomeHero />
            </div>
        </div>
    )
}

export default Home
