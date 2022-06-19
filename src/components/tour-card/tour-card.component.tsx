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

const tourData = {
    name: 'The sahara explore',
    averageRating: 3.2,
    price: 479,
    ratingsQuantity: 243,
    difficulty: 'medium',
    maxGroupSize: 10,
    duration: 7,
    images: ['1', '2', '3'],
    summary:
        'Cruise the Miami coastline "Miami Vice-style" on this speedboat cruise. Settle in to your plush seat as your expert captain pilots the speedboat down the sandy shoreline, where you can view Fisher Island and Star Island\'s collection of multi-millionaire and celebrity homes.',

    coverImage: '/images/sample/tour-card-1.jpg',
    startsDates: [
        '2022-06-22T12:50:48.958Z',
        '2022-07-22T12:50:48.958Z',
        '2022-08-22T12:50:48.958Z',
    ],
    startLocation: {
        description: 'Miami, USA',
    },
    locations: ['1', '2', '3', '4'],
    slug: 'the-sea-explorer',
}

const TourCard: React.FC = () => {
    const nearestDate = tourData.startsDates
        .filter(date => new Date(date).getTime() - Date.now() > 0)
        .sort()[0]

    const handleChangeRating = (newRating: number) => console.log(newRating)

    const router = useRouter()

    const naviagteToTourPage = useCallback(
        () => router.push(`/tours/${tourData.slug}`),
        [router]
    )

    return (
        <article className="grid grid-cols-1 border-[1px] border-lightGreenAlpha p-6 rounded-md md:grid-cols-2 items-center">
            <div
                onClick={naviagteToTourPage}
                className="bg-cover bg-no-repeat bg-center w-full h-[288px] md:h-full transition-transform rounded-md shadow-xl  hover:scale-105 cursor-pointer"
                style={{ backgroundImage: `url(${tourData.coverImage})` }}
            ></div>
            <div className="px-4 py-6 space-y-6  md:pl-6 md:py-2">
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
                            <span className="font-bold text-[23px] text-gray-600 text-lightGreenAlpha">
                                ${tourData.price}
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <ReactStars
                            count={5}
                            onChange={handleChangeRating}
                            size={25}
                            activeColor="#7ed56f"
                            value={tourData.averageRating}
                        />
                        <span>{tourData.ratingsQuantity}</span>
                    </div>
                    <p>
                        {tourData.summary.split(' ').slice(0, 33).join(' ')}...
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-6 whitespace-nowrap">
                    <div className="flex gap-2 flex-wrap">
                        <HiOutlineLocationMarker
                            size="1.5em"
                            className="text-lightGreenAlpha"
                        />
                        <span>{tourData.startLocation.description}</span>
                    </div>
                    <div className="flex gap-2">
                        <HiOutlineCalendar
                            size="1.5em"
                            className="text-lightGreenAlpha"
                        />
                        <span>{moment(nearestDate).format('MMMM Do')}</span>
                    </div>
                    <div className="flex gap-2">
                        <HiOutlineFlag
                            size="1.5em"
                            className="text-lightGreenAlpha"
                        />
                        <span>{tourData.locations.length} Stops</span>
                    </div>
                    <div className="flex gap-1">
                        <MdPersonOutline
                            size="1.5em"
                            className="text-lightGreenAlpha"
                        />
                        <span>{tourData.maxGroupSize} People</span>
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
