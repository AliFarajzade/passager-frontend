import moment from 'moment'
import ReactStars from 'react-rating-stars-component'

import { useRouter } from 'next/router'
import { useCallback } from 'react'
import {
    HiOutlineCalendar,
    HiOutlineFlag,
    HiOutlineLocationMarker,
} from 'react-icons/hi'
import { MdPersonOutline } from 'react-icons/md'

import { TTour } from '../../types/tour.types'

interface IProps {
    tourData: TTour
}

const TourCard: React.FC<IProps> = ({ tourData }) => {
    const router = useRouter()

    const naviagteToTourPage = useCallback(
        () => router.push(`/tours/${tourData.slug}`),
        [router, tourData.slug]
    )

    return (
        <article className="bg-white grid grid-cols-1 border-[1px] border-lightGreenAlpha p-6 rounded-md md:grid-cols-2 items-center">
            <div
                onClick={naviagteToTourPage}
                className="bg-cover bg-no-repeat bg-center w-full h-[288px] md:h-full transition-transform rounded-md shadow-lg  hover:scale-105 cursor-pointer"
                style={{ backgroundImage: `url(${tourData.coverImage})` }}
            ></div>
            <div className="px-0 sm:px-4 py-6 space-y-6  md:pl-6 md:py-2">
                <div className="space-y-2">
                    <div className="uppercase flex flex-col gap-4">
                        <h1
                            className="font-bold text-2xl text-gradient  cursor-pointer"
                            onClick={naviagteToTourPage}
                        >
                            {tourData.name}
                        </h1>
                        <div className="flex items-center justify-between">
                            <h4 className="italic font-bold text-gray-500">
                                {tourData.difficulty} {tourData.duration}-day
                                tour
                            </h4>
                            <span className="font-bold text-[23px]  text-lightGreenAlpha">
                                ${tourData.price}
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <ReactStars
                            count={5}
                            onChange={() => {}}
                            size={25}
                            activeColor="#7ed56f"
                            value={tourData.averageRating}
                        />
                        <span>{tourData.ratingsQuantity}</span>
                    </div>
                    <p>
                        {tourData.description.split(' ').slice(0, 33).join(' ')}
                        ...
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-6 whitespace-nowrap justify-between w-full">
                    <div className="flex items-center gap-2 flex-wrap">
                        <HiOutlineLocationMarker
                            size="1.5em"
                            className="text-lightGreenAlpha flex-shrink-0"
                        />
                        <span className="whitespace-normal text-sm sm:text-base">
                            {tourData.startLocation.description}
                        </span>
                    </div>
                    <div className="flex gap-2 items-center flex-wrap">
                        <HiOutlineCalendar
                            size="1.5em"
                            className="text-lightGreenAlpha flex-shrink-0"
                        />
                        <span className="whitespace-normal text-sm sm:text-base">
                            {moment(tourData.startDate).format('MMM Do')}
                        </span>
                    </div>
                    <div className="flex gap-2 items-center flex-wrap">
                        <HiOutlineFlag
                            size="1.5em"
                            className="text-lightGreenAlpha flex-shrink-0"
                        />
                        <span className="whitespace-normal text-sm sm:text-base">
                            {' '}
                            {tourData.locations.length} Stops
                        </span>
                    </div>
                    <div className="flex gap-1 items-center flex-wrap">
                        <MdPersonOutline
                            size="1.5em"
                            className="text-lightGreenAlpha flex-shrink-0"
                        />
                        <span className="whitespace-normal text-sm sm:text-base">
                            {tourData.maxGroupSize} People
                        </span>
                    </div>
                </div>
                <button
                    className="btn btn-primary  text-white w-full "
                    onClick={naviagteToTourPage}
                >
                    Learn more
                </button>
            </div>
        </article>
    )
}

export default TourCard
