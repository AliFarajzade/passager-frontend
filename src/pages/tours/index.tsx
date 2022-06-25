import type { GetServerSideProps, NextPage } from 'next'
import DatePicker from '../../components/date-picker/date-picker.component'
import DifficultyPicker from '../../components/difficulty-picker/difficulty-picker.component'
import ToursPageLayout from '../../components/layout/tours-page-layout.component'
import NotFoundTour from '../../components/not-found-tours/not-found-tours.component'
import PriceRange from '../../components/price-range/price-range.component'
import RatingPicker from '../../components/rating-picker/rating-picker.component'
import SelectDuration from '../../components/select-duration/select-duration.component'
import SmallerScreenFilter from '../../components/small-screen-filter/small-screen-filter.component'
import TourCard from '../../components/tour-card/tour-card.component'
import ToursPageSlider from '../../components/tours-page-slider/tours-page-slider.component'
import axiosInstance from '../../helpers/axios-instance.helper'
import { THTTPResponse } from '../../types/http-response.types'
import { TTour } from '../../types/tour.types'

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const response = await axiosInstance.get('/tours')
        return {
            props: {
                response: response.data,
            },
        }
    } catch (error) {
        return {
            props: {
                error: JSON.parse(JSON.stringify(error)),
            },
        }
    }
}

interface IProps {
    response?: THTTPResponse<TTour[] | []>
    error?: unknown
}

const ToursPage: NextPage<IProps> = ({ response, error }) => {
    //  TODO: Add error UI.
    console.log({ error })
    console.log({ response })

    return (
        <>
            <ToursPageSlider />
            <SmallerScreenFilter />
            <ToursPageLayout>
                <section className="mb-5 rounded-md overflow-hidden bg-white pb-4">
                    <DatePicker />
                    <PriceRange />
                    <SelectDuration />
                    <RatingPicker />
                    <DifficultyPicker />
                </section>
                <>
                    <section className="space-y-10 mb-8">
                        {response && response.results !== 0 ? (
                            response.data.map(tourObj => (
                                <TourCard
                                    key={tourObj._id}
                                    tourData={tourObj}
                                />
                            ))
                        ) : (
                            <NotFoundTour />
                        )}
                    </section>
                    <div className="w-full flex justify-center">
                        <div className="btn-group">
                            <button className="btn">«</button>
                            <button className="btn">Page 1</button>
                            <button className="btn">»</button>
                        </div>
                    </div>
                </>
            </ToursPageLayout>
        </>
    )
}

export default ToursPage
