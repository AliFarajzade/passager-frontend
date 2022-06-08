import type { NextPage } from 'next'
import ToursPageLayout from '../../components/layout/tours-page-layout.component'
import TourCard from '../../components/tour-card/tour-card.component'
import ToursPageSlider from '../../components/tours-page-slider/tours-page-slider.component'

const ToursPage: NextPage = () => {
    return (
        <>
            <ToursPageSlider />
            <ToursPageLayout>
                <div className="bg-blue-300">Sidebar</div>
                <section className="space-y-10 p-5">
                    <TourCard />
                </section>
            </ToursPageLayout>
        </>
    )
}

export default ToursPage
