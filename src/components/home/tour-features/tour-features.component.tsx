import { BiHeart, BiWorld } from 'react-icons/bi'
import { BsCompass, BsMap } from 'react-icons/bs'
import TourFeatureCard from '../tour-feature-card/tour-feature-card.component'
const cardsData = [
    {
        IconComponent: BiWorld,
        title: 'EXPLORE THE WORLD',
        descriptions:
            'Forget not that the earth delights to feel your bare feet and the winds long to play with your hair.',
    },
    {
        IconComponent: BsCompass,
        title: 'MEET NATURE',
        descriptions:
            'To me a lush carpet of pine needles or spongy grass is more welcome than the most luxurious Persian rug.',
    },
    {
        IconComponent: BsMap,
        title: 'FIND YOUR WAY',
        descriptions:
            'Our experts will lead you all the way long and you will not feel strange at all. More than 250+ guides.',
    },
    {
        IconComponent: BiHeart,
        title: 'LIVE A HEALTHIER LIFE',
        descriptions:
            'I go to nature to be soothed and healed, and to have my senses put in order.',
    },
]

const TourFeatures: React.FC = () => {
    return (
        <section
            id="features"
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
