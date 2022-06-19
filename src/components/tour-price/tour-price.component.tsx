import { FiBookmark } from 'react-icons/fi'

interface IProps {
    tourPrice: number
}

const TourPrice: React.FC<IProps> = ({ tourPrice }) => {
    return (
        <div className="p-4 border-[1px] border-lightGreenAlpha rounded-md w-full shadow-lg space-y-4 bg-white">
            <span className="text-4xl font-bold tracking-wide text-gradient">
                ${tourPrice}
            </span>
            <div className="flex gap-3">
                <button className="btn btn-primary border-0 col-span-3 font-bold text-white text-lg capitalize btn-rgb flex-1">
                    Book Now!
                </button>
                <button className="col-span-1 btn btn-primary btn-circle btn-outline justify-self-end border-2">
                    <FiBookmark size="1.3em" />
                </button>
            </div>
            <p className="text-sm text-gray-500 text-center">
                You can cancel the booking 24 hours before the tour begins.
            </p>
        </div>
    )
}

export default TourPrice
