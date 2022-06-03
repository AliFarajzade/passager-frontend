import type { NextPage } from 'next'
import HomeHero from '../components/home/hero/home-hero.component'
import MostPopularTours from '../components/home/most-popular-tours/most-popular-tours.component'
import NewsLetter from '../components/home/news-letter/news-letter.component'
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
                    <MostPopularTours />
                    <NewsLetter />
                </main>
            </div>
        </div>
    )
}

export default Home
