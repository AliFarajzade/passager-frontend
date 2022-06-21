import type { NextPage } from 'next'
import Guides from '../components/home/guides/guides.component'
import HomeHero from '../components/home/hero/home-hero.component'
import MostPopularTours from '../components/home/most-popular-tours/most-popular-tours.component'
import NewsLetter from '../components/home/news-letter/news-letter.component'
import TourFeatures from '../components/home/tour-features/tour-features.component'
import ToursInfo from '../components/home/tours-info/tours-info.component'

const guidesData = [
    {
        name: 'Rebeca Bennett',
        photo: '/images/guide-5.jpeg',
        description:
            'Rebeca has been a tour guide for over 10 years, and has a passion for adventure. She is a certified Scuba Diver.',
    },
    {
        name: 'John Doe',
        photo: '/images/guide-6.jpg',

        description:
            'John Doe is a tour guide who has been working in the tourism industry for over 10 years. He is traveling the world since 2012.',
    },
    {
        name: 'Samantha Smith',
        photo: '/images/guide-1.jpg',
        description:
            'Samantha knows the best spots in the world. She loves to explore jungles and waterfalls. She is been traveling since 2017.',
    },
    {
        name: 'Ben Yehuda',
        photo: '/images/guide-2.jpg',
        description:
            'Offroad enthusiast, Lion of the roads. You will have the best experince with Ben if you are into desert and nature.',
    },
    {
        name: 'Felix Kipkemei',
        photo: '/images/guide-4.jpg',
        description:
            'Snowboarder, mountain lover, and a true adventure lover. He climbs the highest mountains in the world and loves to go on adventures.',
    },
]

const Home: NextPage = () => {
    // TODO: Add sidebar
    return (
        <div className="lg:p-8 selection:bg-lightGreenAlpha selection:text-white">
            <div className="bg-white">
                <HomeHero />
                <main>
                    <ToursInfo />
                    <TourFeatures />
                    <MostPopularTours />
                    <NewsLetter />
                    <Guides guidesData={guidesData} />
                </main>
            </div>
        </div>
    )
}

export default Home
