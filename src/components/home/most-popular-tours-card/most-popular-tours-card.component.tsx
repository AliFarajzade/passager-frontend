interface IProps {
    cardData: {
        name: string
        details: string[]
        price: number
    }
    index: number
}

const MostPopularToursCard: React.FC<IProps> = ({ cardData, index }) => {
    return (
        <div className="card drop-shadow-2xl max-w-[340px]">
            <div className="card__side card__side--front">
                <div
                    className={`card__image card__image--${index} h-[200px] bg-no-repeat bg-cover bg-center`}
                ></div>
                <h4 className="card__heading">
                    <span
                        className={`card__heading-span card__heading-span--${index}`}
                    >
                        {cardData.name}
                    </span>
                </h4>
                <ul className="flex flex-col gap-4 mx-auto pt-[3.5rem] w-full ">
                    {cardData.details.map(detail => (
                        <li
                            key={detail}
                            className="text-slate-600 border-b-2 border-slate-100 pb-3 w-3/4 mx-auto last:border-0 last:pb-0 text-base text-center"
                        >
                            {detail}
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className={`card__side card__side--back card__side--back-${index} h-full   hidden lg:flex lg:flex-col lg:gap-6 lg:justify-center lg:items-center`}
            >
                <span className="text-3xl tracking-wide font-light">ONLY</span>
                <span className="font-light text-5xl">${cardData.price}</span>
                <button className="btn bg-white shadow-lg rounded-full text-slate-600 border-0 hover:bg-slate-200 ">
                    More details
                </button>
            </div>
        </div>
    )
}

export default MostPopularToursCard
