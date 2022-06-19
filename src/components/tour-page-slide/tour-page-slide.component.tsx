interface IProps {
    tourImage: string
}

const TourPageSlide: React.FC<IProps> = ({ tourImage }) => {
    console.log(tourImage)
    return (
        <div
            style={{ backgroundImage: `url(${tourImage})` }}
            className="bg-no-repeat bg-center bg-cover w-full h-full"
        ></div>
    )
}

export default TourPageSlide
