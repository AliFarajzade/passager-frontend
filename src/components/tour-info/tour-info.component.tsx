import { BiTime } from 'react-icons/bi'
import { DiModernizr } from 'react-icons/di'
import { MdPersonOutline } from 'react-icons/md'
import ReactStars from 'react-rating-stars-component'
import { TTour } from '../../types/tour.types'

interface IProps {
    tourData: TTour
}

const TourInfo: React.FC<IProps> = ({ tourData }) => {
    const handleChangeRating = (newRating: number) => console.log(newRating)

    return (
        <div className="p-4 border-[1px] border-lightGreenAlpha rounded-md w-full">
            <h1 className="text-gradient text-2xl font-semibold tracking-wide capitalize mb-4">
                {tourData.name}
            </h1>
            <div className="flex items-center justify-between gap-x-6 gap-y-4 flex-wrap mb-5">
                <div className="flex items-center gap-2 capitalize">
                    <BiTime size="1.8em" className="text-lightGreen" />
                    <span className="text-lg">{tourData.duration} days</span>
                </div>
                <div className="flex items-center gap-2">
                    {/* TODO: Add tooltip for only not logged users. */}
                    <ReactStars
                        count={5}
                        onChange={handleChangeRating}
                        size={25}
                        activeColor="#7ed56f"
                        value={tourData.averageRating}
                    />
                    <span>{tourData.ratingsQuantity}</span>
                </div>

                <div
                    className="flex items-center gap-2 capitalize"
                    title="difficulty"
                >
                    <DiModernizr size="1.8em" className="text-lightGreen" />
                    <span className="text-lg">{tourData.difficulty}</span>
                </div>

                <div className="flex items-center gap-2 capitalize">
                    <MdPersonOutline size="1.8em" className="text-lightGreen" />
                    <span className="text-lg">
                        {tourData.maxGroupSize} people
                    </span>
                </div>
            </div>
            <div className="prose lg:prose-lg">
                <h3>About the tour:</h3>
                <p>{tourData.description}</p>
            </div>
        </div>
    )
}

export default TourInfo
