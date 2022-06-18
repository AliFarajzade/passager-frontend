import type { NextPage } from 'next'
import DatePicker from '../../components/date-picker/date-picker.component'
import ToursPageLayout from '../../components/layout/tours-page-layout.component'
import PriceRange from '../../components/price-range/price-range.component'
import TourCard from '../../components/tour-card/tour-card.component'
import ToursPageSlider from '../../components/tours-page-slider/tours-page-slider.component'

const ToursPage: NextPage = () => {
    return (
        <>
            <ToursPageSlider />
            <ToursPageLayout>
                <section className="mt-5 rounded-md overflow-hidden sticky top-2  bg-gray-100">
                    <DatePicker />
                    <PriceRange />
                    {/* <SelectDuration /> */}
                    {/* <RatingPicker /> */}
                </section>
                <section className="space-y-10 p-5">
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                </section>
            </ToursPageLayout>
        </>
    )
}

export default ToursPage
