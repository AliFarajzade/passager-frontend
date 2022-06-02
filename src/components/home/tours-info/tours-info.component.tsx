import TourInfoCard from '../tour-info-card/tour-info-card.component'

const cards = [
    {
        name: 'nat-1-large',
        image: '/images/nat-1-large.jpg',
        top: '0px',
        left: '25px',
    },
    {
        name: 'nat-2-large',
        image: '/images/nat-2-large.jpg',
        top: '0px',
        left: '2px',
    },
    {
        name: 'nat-3-large',
        image: '/images/nat-3-large.jpg',
        top: '0px',
        left: '2px',
    },
]

const ToursInfo = () => {
    return (
        <section className="py-32 px-10">
            <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-wider bg-gradient-to-r from-lightGreen to-darkGreen bg-clip-text text-transparent hover:skew-y-2 hover:skew-x-12 hover:scale-110 transition-all text-shadow">
                EXCITING TOURS FOR ADVENTUROUS PEOPLE
            </h1>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-5 pt-24">
                <div className="basis-2/4 space-y-12">
                    <div className="space-y-4 prose">
                        {/* TODO: Change paragraph <text className=""></text> */}
                        <h4>YOU&apos;RE GOING TO FALL IN LOVE WITH NATURE</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Magnam similique optio dolore obcaecati
                            repudiandae dolorem qui ipsam tenetur culpa placeat!
                        </p>
                    </div>
                    <div className="space-y-4 prose">
                        <h4>LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Magnam similique optio dolore obcaecati
                            repudiandae dolorem qui ipsam tenetur culpa placeat!
                        </p>
                    </div>
                    <button className="btn btn-ghost text-lightGreen hover:bg-lightGreenAlpha hover:text-white">
                        Explore Tours <span className="text-3xl">→</span>
                    </button>
                </div>
                <div className="basis-2/4 relative hidden md:block">
                    {cards.map((cardData, index) => (
                        <TourInfoCard
                            key={cardData.name}
                            index={index}
                            cardData={cardData}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ToursInfo
