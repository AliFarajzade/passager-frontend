import type { NextPage } from 'next'
import HomeHero from '../components/home/hero/home-hero.component'
import TourFeatures from '../components/home/tour-features/tour-features.component'
import ToursInfo from '../components/home/tours-info/tours-info.component'

const Home: NextPage = () => {
    return (
        <div className="lg:p-8 selection:bg-lightGreenAlpha selection:text-white">
            <div className="bg-gray-100">
                <HomeHero />
                <main>
                    <ToursInfo />
                    <TourFeatures />
                </main>
            </div>
        </div>
    )
}

export default Home
