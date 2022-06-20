import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'
import TourPageSlide from '../tour-page-slide/tour-page-slide.component'

interface IProps {
    tourImages: string[]
}

const TourPageSlider: React.FC<IProps> = ({ tourImages }) => {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            className="w-full min-h-[45vh] lg:min-h-[65vh] rounded-md flex-1"
        >
            {tourImages.map(tourImage => (
                <SwiperSlide key={tourImage}>
                    <TourPageSlide tourImage={tourImage} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default TourPageSlider
