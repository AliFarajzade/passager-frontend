interface IProps {
    cardData: {
        name: string
        image: string
        top: string
        left: string
    }
    index: number
}

const TourInfoCard: React.FC<IProps> = ({ cardData, index }) => {
    return (
        <div
            style={{ backgroundImage: `url(${cardData.image})` }}
            className={`pic h-40 bg-cover bg-no-repeat bg-center  absolute p--${index} drop-shadow-2xl`}
        ></div>
    )
}

export default TourInfoCard
