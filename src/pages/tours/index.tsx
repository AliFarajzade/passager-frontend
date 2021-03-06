import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ClearFilter from '../../components/clear-filter/clear-filter.component'
import DatePicker from '../../components/date-picker/date-picker.component'
import DifficultyPicker from '../../components/difficulty-picker/difficulty-picker.component'
import ToursPageLayout from '../../components/layout/tours-page-layout.component'
import NotFoundTour from '../../components/not-found-tours/not-found-tours.component'
import PriceRange from '../../components/price-range/price-range.component'
import RatingPicker from '../../components/rating-picker/rating-picker.component'
import SearchCity from '../../components/search-city/search-city.component'
import SelectDuration from '../../components/select-duration/select-duration.component'
import SEO from '../../components/SEO/SEO.component'
import SmallerScreenFilter from '../../components/small-screen-filter/small-screen-filter.component'
import TourCard from '../../components/tour-card/tour-card.component'
import TourPagePagination from '../../components/tour-page-pagination/tour-page-pagination.component'
import ToursPageSlider from '../../components/tours-page-slider/tours-page-slider.component'
import axiosInstance from '../../helpers/axios-instance.helper'
import { THTTPResponse } from '../../types/http-response.types'
import { TTour } from '../../types/tour.types'

export const getServerSideProps: GetServerSideProps = async context => {
    try {
        const response = await axiosInstance.get(context.resolvedUrl)
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
    const router = useRouter()
    const initialPage = router.query.page ?? 1

    const [page, setPage] = useState<number>(+initialPage)

    return (
        <>
            <SEO
                title="Explour Hottest Tours Available"
                description="Tours Page"
                image="/images/logo-gradient.png"
            />
            <>
                <ToursPageSlider />
                <SmallerScreenFilter />
                <ToursPageLayout>
                    <section className="mb-5 rounded-md overflow-hidden bg-white pb-4">
                        <ClearFilter className="rounded-none btn-block" />
                        <DatePicker />
                        <SearchCity />
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
                        {!(error || !response || response.results === 0) && (
                            <TourPagePagination
                                page={page}
                                setPage={setPage}
                                total={response.total}
                            />
                        )}
                    </>
                </ToursPageLayout>
            </>
        </>
    )
}

export default ToursPage
