import { WiDaySunny } from 'react-icons/wi'

interface IProps {
    allLocations: {
        description: string
        coordinates: number[]
        day: number
    }[]
}

const TourLocations: React.FC<IProps> = ({ allLocations }) => {
    return (
        <div className="bg-white border-[1px] border-lightGreenAlpha shadow-lg p-4">
            <button className="btn btn-ghost flex gap-2 items-center text-lg capitalize">
                <WiDaySunny size="2em" className="text-lightGreenAlpha" />
                Day {allLocations[0].day}: Start location:{' '}
                {allLocations[0].description}
            </button>
        </div>
    )
}

export default TourLocations
