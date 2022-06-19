import { NextPage } from 'next'
import TourInfo from '../../../components/tour-info/tour-info.component'
import TourPageLayout from '../../../components/tour-page-layout/tour-page-layout.component'
import TourPageSlider from '../../../components/tour-page-slider/tour-page-slider.component'
import TourPrice from '../../../components/tour-price/tour-price.component'

const tourData = {
    name: 'The sahara explore',
    averageRating: 3.2,
    price: 479,
    ratingsQuantity: 243,
    difficulty: 'medium',
    maxGroupSize: 10,
    duration: 7,
    images: [
        '/images/sample/the-sahara-explorer-1.jpg',
        '/images/sample/the-sahara-explorer-2.jpg',
        '/images/sample/the-sahara-explorer-3.jpg',
        '/images/sample/the-sahara-explorer-4.jpg',
    ],
    summary:
        'Cruise the Miami coastline "Miami Vice-style" on this speedboat cruise. Settle in to your plush seat as your expert captain pilots the speedboat down the sandy shoreline, where you can view Fisher Island and Star Island\'s collection of multi-millionaire and celebrity homes.',

    coverImage: '/images/sample/tour-card-1.jpg',
    startsDates: [
        '2022-06-22T12:50:48.958Z',
        '2022-07-22T12:50:48.958Z',
        '2022-08-22T12:50:48.958Z',
    ],
    startLocation: {
        type: 'Point',
        coordinates: [-80.185942, 25.774772],
        address: '301 Biscayne Blvd, Miami, FL 33132, USA',
        description: 'Miami, USA',
    },
    description:
        'The Sahara is much more than just sand – in fact, the majority of the Sahara is made up of barren, rocky plateaus, as well as salt flats, sand dunes, mountains and dry valleys. The rivers and streams found in the Sahara are all seasonal, apart from the River Nile. There are over 20 lakes in the Sahara, most of which are saltwater lakes. Lake Chad is the only freshwater lake in the desert.',
    locations: [
        {
            type: 'Point',
            coordinates: [-80.128473, 25.781842],
            description: 'Lummus Park Beach',
            day: 1,
        },
        {
            type: 'Point',
            coordinates: [-80.647885, 24.909047],
            description: 'Islamorada',
            day: 2,
        },
        {
            type: 'Point',
            coordinates: [-81.0784, 24.707496],
            description: 'Sombrero Beach',
            day: 3,
        },
        {
            type: 'Point',
            coordinates: [-81.768719, 24.552242],
            description: 'West Key',
            day: 5,
        },
    ],
    slug: 'the-sea-explorer',
}

const TourPage: NextPage = () => {
    return (
        <TourPageLayout>
            <section>
                <TourPageSlider tourImages={tourData.images} />
            </section>
            <section className="space-y-6">
                <TourInfo tourData={tourData} />
                <TourPrice tourPrice={tourData.price} />
            </section>
        </TourPageLayout>
    )
}

export default TourPage
