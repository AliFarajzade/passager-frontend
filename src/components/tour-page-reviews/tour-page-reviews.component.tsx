import moment from 'moment'
import ReactStars from 'react-rating-stars-component'

import debounce from 'lodash.debounce'
import { ChangeEvent, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { BiCommentDetail } from 'react-icons/bi'
import Skeleton from 'react-loading-skeleton'
import { useSetRecoilState } from 'recoil'
import axiosInstance from '../../helpers/axios-instance.helper'
import useGetMe from '../../hooks/use-get-me.hook'
import useRequest from '../../hooks/use-request.hook'
import authModalStateAtom from '../../recoil/atoms/auth-modal.atom'
import { THTTPResponse } from '../../types/http-response.types'
import { TReview } from '../../types/review.types'
import NoAvatar from '../no-avatar/no-avatar.component'
import UserAvatar from '../user-avatar/user-avatar.component'

const LIMIT = 1

interface IProps {
    tourID: number
}

const TourPageReviews: React.FC<IProps> = ({ tourID }) => {
    const [page, setPage] = useState<number>(1)
    const [reviews, setReviews] = useState<TReview[]>([])
    const [review, setReview] = useState<string>('')
    const [rating, setRating] = useState<number>(5)
    const [total, setTotal] = useState<number | undefined>(undefined)
    const setAuthModalState = useSetRecoilState(authModalStateAtom)
    const [userState] = useGetMe()

    const [, isFetchingReviews, errorFetchReviews, doFetch] =
        useRequest<THTTPResponse<TReview[]>>()

    const [, isPostingReview, errorPostingReview, doPost] =
        useRequest<THTTPResponse<TReview>>()

    const handleChangePage = () => {
        setPage(prevState => prevState + 1)
    }

    const handleChangeReview = (event: ChangeEvent<HTMLTextAreaElement>) =>
        setReview(event.target.value)

    const handleChangeRating = (newRating: number) => setRating(newRating)

    const handleReviewSubmit = async () => {
        if (isPostingReview) return

        if (!userState.user)
            return setAuthModalState(prevState => ({
                ...prevState,
                open: true,
                view: 'signIn',
            }))

        if (!review.trim()) return

        const trimedReview = review.trim()

        const response = await doPost({
            axiosInstance,
            url: `/tours/${tourID}/reviews`,
            method: 'POST',
            requestConfig: {
                data: {
                    review: trimedReview,
                    rating,
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            },
        })

        if (response?.data) {
            const newReview = {
                ...response.data,
                user: userState.user,
            }

            setReviews(prevState => [newReview, ...prevState])
            setReview('')
            setRating(5)
            toast.success('Review submitted successfully!')
        } else {
            toast.error('Cannot submit review')
        }
    }

    useEffect(() => {
        const getNewReviews = debounce(async () => {
            const reviews = await doFetch({
                axiosInstance,
                method: 'GET',
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

    const isThereMoreComments = errorFetchReviews
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
                <div>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-lg font-semibold">
                            Submit your review
                        </h3>
                        <textarea
                            value={review}
                            onChange={handleChangeReview}
                            className="textarea textarea-bordered w-full"
                            placeholder="Tell us what you think..."
                        ></textarea>
                        <ReactStars
                            count={5}
                            onChange={handleChangeRating}
                            size={25}
                            activeColor="#7ed56f"
                            value={5}
                        />
                        <button
                            className={`btn btn-primary btn-outline max-w-max ${
                                isPostingReview && 'loading'
                            }`}
                            onClick={handleReviewSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="flex flex-col gap-12 mb-6">
                    {isFetchingReviews ? (
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
                                        <div className="w-14">
                                            <UserAvatar
                                                name={review.user.name}
                                                photo={review.user.photo}
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-14 h-14">
                                            <NoAvatar name={review.user.name} />
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
                                            value={rating}
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
