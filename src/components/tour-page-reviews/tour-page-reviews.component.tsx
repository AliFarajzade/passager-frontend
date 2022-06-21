import moment from 'moment'
import ReactStars from 'react-rating-stars-component'

import Image from 'next/image'
import { BiCommentDetail } from 'react-icons/bi'
import { TReview } from '../../types/review.types'

const reviewsData: TReview[] = [
    {
        review: 'This tour was a great experience. I highly recommend this tour to anyone. Tour guides were very helpful and the tour was very fun. I would recommend this tour to anyone. This tour was a great experience. I highly recommend this tour to anyone. Tour guides were very helpful and the tour was very fun. I would recommend this tour to anyone. This tour was a great experience. I highly recommend this tour to anyone. Tour guides were very helpful and the tour was very fun. I would recommend this tour to anyone.',
        _id: '47219304sdfhla',
        createdAt: '2022-05-27T08:45:28.580Z',
        updatedAt: '2022-05-27T08:45:28.580Z',
        rating: 4.5,
        tour: '8912047213840ashf',
        user: {
            _id: '5c8a1dfa2f8fb814b56fa181',
            name: 'Lourdes Browning',
        },
    },
    {
        review: 'This was phenomenal',
        _id: '47219304sadsdfhla',
        createdAt: '2022-05-27T08:45:28.580Z',
        updatedAt: '2022-05-27T08:45:28.580Z',
        rating: 2.5,
        tour: '8912047213840ashf',
        user: {
            _id: '5c8a1dfa2f8fb814b56fa181',
            name: 'Lourdes Browning',
            photo: '/images/sample/review-1.jpg',
        },
    },
    {
        review: 'This was phenomenal',
        _id: '47219304sgdaddfhla',
        createdAt: '2022-05-27T08:45:28.580Z',
        updatedAt: '2022-05-27T08:45:28.580Z',
        rating: 3.5,
        tour: '8912047213840ashf',
        user: {
            _id: '5c8a1dfa2f8fb814b56fa181',
            name: 'Lourdes Browning',
        },
    },
    {
        review: 'This was phenomenal',
        _id: '47219304s3123dfhla',
        createdAt: '2022-05-27T08:45:28.580Z',
        updatedAt: '2022-05-27T08:45:28.580Z',
        rating: 4.5,
        tour: '8912047213840ashf',
        user: {
            _id: '5c8a1dfa2f8fb814b56fa181',
            name: 'Lourdes Browning',
            photo: '/images/sample/review-2.jpg',
        },
    },
]

const TourPageReviews: React.FC = () => {
    const handleChangeRating = (newRating: number) => console.log(newRating)

    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="text-xl font-semibold bg-white shadow-md rounded-md p-6 flex items-center gap-4">
                <BiCommentDetail
                    size="1.75em"
                    className="text-lightGreenAlpha"
                />
                Reviews
            </div>
            <div className="bg-white p-5">
                {/* TODO: Check for auth */}
                <div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-semibold">
                            Submit your review
                        </h3>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            placeholder="Bio"
                        ></textarea>
                        <button className="btn btn-primary btn-outline max-w-max">
                            Submit
                        </button>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="flex flex-col gap-12 mb-6">
                    {reviewsData.map(review => (
                        <div
                            key={review._id}
                            className="border-[1px] border-lightGreenAlpha rounded-md shadow-md flex flex-col gap-6 p-5"
                        >
                            <div className="flex items-center gap-4">
                                {review.user.photo ? (
                                    <div className="avatar">
                                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                                            <Image
                                                src={review.user.photo}
                                                alt={review.user.name}
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-14 h-14 rounded-full  flex justify-center items-center bg-lightGreen font-bold text-white text-lg">
                                        {review.user.name
                                            .split(' ')
                                            .map(name => name[0])
                                            .join('')}
                                    </div>
                                )}
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h2>{review.user.name}</h2>
                                        <b>·</b>
                                        <span className="text-gray-400">
                                            {moment(review.createdAt).format(
                                                'MMMM Do, YYYY'
                                            )}
                                        </span>
                                    </div>
                                    <ReactStars
                                        count={5}
                                        onChange={handleChangeRating}
                                        size={20}
                                        activeColor="#7ed56f"
                                        edit={false}
                                        value={review.rating}
                                    />
                                </div>
                            </div>
                            <p>{review.review}</p>
                        </div>
                    ))}
                </div>
                <div className="mx-auto text-center">
                    <button className="btn btn-primary  w-[150px] rounded-full">
                        Load more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TourPageReviews
