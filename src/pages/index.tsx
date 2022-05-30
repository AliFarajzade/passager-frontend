import type { NextPage } from 'next'
import HomeHero from '../components/home/home-hero.component'

const Home: NextPage = () => {
    return (
        <div className="p-8">
            <HomeHero />
        </div>
    )
}

export default Home
