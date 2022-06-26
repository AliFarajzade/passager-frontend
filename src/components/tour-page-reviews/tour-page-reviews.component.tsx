import moment from 'moment'
import ReactStars from 'react-rating-stars-component'

import debounce from 'lodash.debounce'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BiCommentDetail } from 'react-icons/bi'
import Skeleton from 'react-loading-skeleton'
import axiosInstance from '../../helpers/axios-instance.helper'
import useRequest from '../../hooks/use-request.hook'
import { THTTPResponse } from '../../types/http-response.types'
import { TReview } from '../../types/review.types'

const LIMIT = 1

interface IProps {
    tourID: number
}

const TourPageReviews: React.FC<IProps> = ({ tourID }) => {
    const [page, setPage] = useState<number>(1)
    const [reviews, setReviews] = useState<TReview[]>([])
    const [total, setTotal] = useState<number | undefined>(undefined)

    const [, isLoading, error, doFetch] = useRequest<THTTPResponse<TReview[]>>()

    const handleChangePage = () => {
        setPage(prevState => prevState + 1)
    }

    useEffect(() => {
        const getNewReviews = debounce(async () => {
            const reviews = await doFetch({
                axiosInstance,
                method: 'get',
                requestConfig: {},
                url: `/tours/${tourID}/reviews?page=${page}&limit=1&sort=-createdAt`,
            })

            if (!reviews) return

            setTotal(reviews.total!)
            setReviews(prevState => [...prevState, ...reviews.data])
        })

        getNewReviews()

        return () => getNewReviews.cancel()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    const isThereMoreComments = error
        ? true
        : reviews.length
        ? total
            ? page === Math.ceil(total / LIMIT)
            : false
        : true

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
                    {isLoading ? (
                        <div className="w-full h-7">
                            <Skeleton />
                        </div>
                    ) : reviews.length ? (
                        reviews.map(review => (
                            <div
                                key={review._id}
                                className="border-[1px] border-lightGreenAlpha rounded-md shadow-md flex flex-col gap-6 p-5"
                            >
                                <div className="flex items-center gap-4">
                                    {review.user.photo ? (
                                        <div className="avatar">
                                            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                                                <Image
                                                    src={`/${review.user.photo}`}
                                                    alt={review.user.name}
                                                    width="100%"
                                                    height="100%"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-14 h-14 rounded-full  flex justify-center items-center bg-lightGreen font-bold text-white text-lg flex-shrink-0">
                                            {review.user.name
                                                .split(' ')
                                                .map(name => name[0])
                                                .join('')}
                                        </div>
                                    )}
                                    <div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h2>{review.user.name}</h2>
                                            <b>·</b>
                                            <span className="text-gray-400">
                                                {moment(
                                                    review.createdAt
                                                ).format('MMMM Do, YYYY')}
                                            </span>
                                        </div>
                                        <ReactStars
                                            count={5}
                                            onChange={() => {}}
                                            size={20}
                                            activeColor="#7ed56f"
                                            edit={false}
                                            value={review.rating}
                                        />
                                    </div>
                                </div>
                                <p>{review.review}</p>
                            </div>
                        ))
                    ) : (
                        <div className="flex justify-center items-center p-5 text-xl border-[1px] border-b-slate-200">
                            There is no review.
                        </div>
                    )}
                </div>
                <div className="mx-auto text-center">
                    <button
                        onClick={handleChangePage}
                        className="btn btn-primary w-[150px] rounded-full"
                        disabled={isThereMoreComments}
                    >
                        {isThereMoreComments ? 'No more comments' : 'Load more'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TourPageReviews
