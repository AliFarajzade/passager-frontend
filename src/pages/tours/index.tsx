import type { NextPage } from 'next'
import DatePicker from '../../components/date-picker/date-picker.component'
import DifficultyPicker from '../../components/difficulty-picker/difficulty-picker.component'
import ToursPageLayout from '../../components/layout/tours-page-layout.component'
import PriceRange from '../../components/price-range/price-range.component'
import RatingPicker from '../../components/rating-picker/rating-picker.component'
import SelectDuration from '../../components/select-duration/select-duration.component'
import TourCard from '../../components/tour-card/tour-card.component'
import ToursPageSlider from '../../components/tours-page-slider/tours-page-slider.component'

const ToursPage: NextPage = () => {
    return (
        <>
            <ToursPageSlider />
            <ToursPageLayout>
                <section className="mb-5 rounded-md overflow-hidden bg-gray-100 pb-4">
                    <DatePicker />
                    <PriceRange />
                    <SelectDuration />
                    <RatingPicker />
                    <DifficultyPicker />
                </section>
                <section className="space-y-10">
                    <TourCard />
                </section>
            </ToursPageLayout>
        </>
    )
}

export default ToursPage
