import moment from 'moment'
import {
    HiOutlineCalendar,
    HiOutlineFlag,
    HiOutlineLocationMarker,
} from 'react-icons/hi'
import { MdPersonOutline } from 'react-icons/md'

const tourData = {
    name: 'The sea explorer',
    averageRating: 4.2,
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

    return (
        <div className="w-full p-5 flex items-center rounded-md overflow-hidden border-[1px] border-slate-300">
            <div
                className="h-64 w-3/5 bg-no-repeat rounded-md bg-cover bg-center shadow-xl transition-transform hover:scale-105"
                style={{ backgroundImage: `url(${tourData.coverImage})` }}
            ></div>
            <div className="w-full h-full flex flex-col gap-3 pl-5">
                <div className="flex items-center gap-3 tracking-wide">
                    <h1 className="text-2xl font-bold uppercase">
                        {tourData.name}
                    </h1>
                    <span className="text-sm font-semibold text-slate-600 italic mr-auto">
                        {`${tourData.difficulty} ${tourData.duration}-day tour`.toUpperCase()}
                    </span>
                    <span className="font-semibold text-lg">
                        ${tourData.price}
                    </span>
                </div>
                <div className="w-full flex items-center gap-3">
                    <div className="rating rating-sm">
                        <input
                            type="radio"
                            onChange={e => console.log(e.target.value)}
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            checked={tourData.averageRating > 1}
                        />
                        <input
                            type="radio"
                            onChange={e => console.log(e.target.value)}
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            checked={tourData.averageRating > 2}
                        />
                        <input
                            type="radio"
                            onChange={e => console.log(e.target.value)}
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            checked={tourData.averageRating > 3}
                        />
                        <input
                            type="radio"
                            onChange={e => console.log(e.target.value)}
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            checked={tourData.averageRating > 4}
                        />
                        <input
                            type="radio"
                            onChange={e => console.log(e.target.value)}
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            checked={tourData.averageRating > 4.8}
                        />
                    </div>
                    <span className="text-sm text-slate-600">
                        {tourData.ratingsQuantity}
                    </span>
                </div>
                <p className="text-[15px]">{tourData.summary}</p>
                <div className="grid grid-cols-4  text-sm">
                    <div className="flex gap-2 flex-wrap">
                        <HiOutlineLocationMarker size="1.5em" />
                        <span>{tourData.startLocation.description}</span>
                    </div>
                    <div className="flex gap-2">
                        <HiOutlineCalendar size="1.5em" />
                        <span>{moment(nearestDate).format('MMMM Do')}</span>
                    </div>
                    <div className="flex gap-2">
                        <HiOutlineFlag size="1.5em" />
                        <span>{tourData.locations.length} Stops</span>
                    </div>
                    <div className="flex gap-1">
                        <MdPersonOutline size="1.5em" />
                        <span>{tourData.maxGroupSize} People</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourCard
