import Link from 'next/link'
import MostPopularToursCard from '../most-popular-tours-card/most-popular-tours-card.component'

const cardsData = [
    {
        name: 'The Sea Explorer',
        details: [
            '3 days tours',
            'Up to 30 people',
            '2 tour guides',
            'Sleep in cozy hotels',
            'Difficulty: easy',
        ],
        price: 297,
        link: '/tours/the-sea-explorer',
    },
    {
        name: 'The Forest Hiker',
        details: [
            '7 days tours',
            'Up to 40 people',
            '6 tour guides',
            'Sleep in provided tents',
            'Difficulty: medium',
        ],
        price: 497,
        link: '/tours/the-forest-hiker',
    },
    {
        name: 'The Snow Adventurer',
        details: [
            '5 days tours',
            'Up to 15 people',
            '3 tour guides',
            'Sleep in provided tents',
            'Difficulty: hard',
        ],

        price: 897,
        link: '/tours/the-snow-adventurer',
    },
]

const MostPopularTours: React.FC = () => {
    return (
        <section className="py-32 px-10 ">
            <h1 className="gradient-title mb-12">Most Popular Tours</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:h-[36rem] items-center gap-6 xl:gap-20">
                {cardsData.map((cardData, index) => (
                    <MostPopularToursCard
                        key={cardData.name}
                        cardData={cardData}
                        index={index + 1}
                    />
                ))}
            </div>
            <div className="text-center mx-auto pt-10">
                <Link href="/tours">
                    <button className="btn btn-primary shadow-lg w-64 h-8 text-lg bg-lightGreenAlpha text-white rounded-full">
                        Explore Tours
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default MostPopularTours
