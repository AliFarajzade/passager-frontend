import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import ToursPageSlide from '../tours-page-slide/tours-page-slide.component'

const slidersData = [
    {
        title: 'Adventure Awaits',
        description: 'Choose from thousands of organised travel adventures.',
        image: '/images/slider-1.jpg',
    },
    {
        title: 'Just Like Movies!',
        description: 'See the places that you saw in the movies.',
        image: '/images/slider-2.jpg',
    },
    {
        title: 'Enjoy Other Cultures',
        description: 'Explore in-and-out of the visiting locations.',
        image: '/images/slider-3.jpg',
    },
    {
        title: 'Time is Not a Limit!',
        description: 'See the beauty of places in diffrent times.',
        image: '/images/slider-4.jpg',
    },
]

const ToursPageSlider: React.FC = () => {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="h-[50vh]"
        >
            {slidersData.map(sliderData => (
                <SwiperSlide key={sliderData.title}>
                    <ToursPageSlide sliderData={sliderData} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ToursPageSlider