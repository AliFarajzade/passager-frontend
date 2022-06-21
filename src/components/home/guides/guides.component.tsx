import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Navigation } from 'swiper'
import useMediaQuery from '../../../hooks/use-media-query.hook'
import TourGuideCard from '../../tour-guide-card/tour-guide-card.component'

interface IProps {
    guidesData: {
        name: string
        photo: string
        description: string
    }[]
}

const Guides: React.FC<IProps> = ({ guidesData }) => {
    const moreThan1400 = useMediaQuery('(min-width: 1400px)')
    const moreThan1080 = useMediaQuery('(min-width: 1080px)')
    const moreThan700 = useMediaQuery('(min-width: 700px)')

    return (
        <div className="py-28 pb-20 px-10" id="guides">
            <h1 className="gradient-title mb-16">Our Awesome Guides</h1>
            <Swiper
                slidesPerView={
                    moreThan1400 ? 4 : moreThan1080 ? 3 : moreThan700 ? 2 : 1
                }
                spaceBetween={50}
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                {guidesData.map(guide => (
                    <SwiperSlide key={guide.name}>
                        <TourGuideCard tourGuide={guide} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Guides
