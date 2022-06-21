import type { NextPage } from 'next'
import DatePicker from '../../components/date-picker/date-picker.component'
import DifficultyPicker from '../../components/difficulty-picker/difficulty-picker.component'
import ToursPageLayout from '../../components/layout/tours-page-layout.component'
import PriceRange from '../../components/price-range/price-range.component'
import RatingPicker from '../../components/rating-picker/rating-picker.component'
import SelectDuration from '../../components/select-duration/select-duration.component'
import SmallerScreenFilter from '../../components/small-screen-filter/small-screen-filter.component'
import TourCard from '../../components/tour-card/tour-card.component'
import ToursPageSlider from '../../components/tours-page-slider/tours-page-slider.component'

const ToursPage: NextPage = () => {
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
                        <TourCard />
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
