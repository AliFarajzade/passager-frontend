import type { NextPage } from 'next'
import HomeHero from '../components/home/hero/home-hero.component'

const Home: NextPage = () => {
    return (
        <div className="lg:p-8 selection:bg-lightGreenAlpha selection:text-white">
            <div className="bg-gray-100">
                <HomeHero />
                <main className="px-10"></main>
            </div>
        </div>
    )
}

export default Home
