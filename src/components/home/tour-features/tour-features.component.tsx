import { BiHeart, BiWorld } from 'react-icons/bi'
import { BsCompass, BsMap } from 'react-icons/bs'
import TourFeatureCard from '../tour-feature-card/tour-feature-card.component'
const cardsData = [
    {
        IconComponent: BiWorld,
        title: 'EXPLORE THE WORLD',
        descriptions:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    },
    {
        IconComponent: BsCompass,
        title: 'MEET NATURE',
        descriptions:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    },
    {
        IconComponent: BsMap,
        title: 'FIND YOUR WAY',
        descriptions:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    },
    {
        IconComponent: BiHeart,
        title: 'LIVE A HEALTHIER LIFE',
        descriptions:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    },
]

const TourFeatures: React.FC = () => {
    return (
        <section
            style={{
                backgroundImage:
                    'linear-gradient(to bottom right,rgba(126,213,111,.8),rgba(40,180,133,.8)), url(/images/nat-4.jpg)',
            }}
            className="py-60 px-10 -skew-y-6  bg-no-repeat bg-cover"
        >
            <div className="w-full skew-y-6 grid  grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-16 sm:gap-12  justify-between">
                {cardsData.map(cardData => (
                    <TourFeatureCard cardData={cardData} key={cardData.title} />
                ))}
            </div>
        </section>
    )
}

export default TourFeatures
