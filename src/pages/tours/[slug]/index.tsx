import { NextPage } from 'next'

import { useEffect, useMemo } from 'react'
import { useSetRecoilState } from 'recoil'
import TourGuides from '../../../components/tour-guides/tour-guides.component'
import TourInfo from '../../../components/tour-info/tour-info.component'
import TourLocations from '../../../components/tour-locations/tour-locations.component'
import TourPageFeatures from '../../../components/tour-page-features/tour-features.component'
import TourPageLayout from '../../../components/tour-page-layout/tour-page-layout.component'
import TourPageMap from '../../../components/tour-page-map/tour-page-map.component'
import TourPageSlider from '../../../components/tour-page-slider/tour-page-slider.component'
import TourPrice from '../../../components/tour-price/tour-price.component'
import useMediaQuery from '../../../hooks/use-media-query.component'
import mapStateAtom from '../../../recoil/atoms/map.atom'

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
            day: 4,
        },
    ],
    slug: 'the-sea-explorer',
    guides: [
        {
            name: 'Rebeca Bennett',
            photo: '/images/sample/rebeca.jpeg',
            description:
                'Rebeca has been a tour guide for over 10 years, and has a passion for adventure. She is a certified Scuba Diver, and passionate about the oceans.',
        },
        {
            name: 'John Doe',
            photo: '/images/sample/john.jpg',
            description:
                'John Doe is a tour guide who has been working in the tourism industry for over 10 years. He is traveling the world since 2012.',
        },
    ],
}

const TourPage: NextPage = () => {
    const setMapState = useSetRecoilState(mapStateAtom)

    const moreThan1280px = useMediaQuery('(min-width: 1280px)')

    const allLocations = useMemo(() => {
        let output = [
            {
                description: tourData.startLocation.description,
                coordinates: tourData.startLocation.coordinates,
                day: 0,
            },
        ]
        tourData.locations.map(location =>
            output.push({
                description: location.description,
                coordinates: location.coordinates,
                day: location.day,
            })
        )
        return output
    }, [])

    useEffect(() => {
        setMapState(prevState => ({
            ...prevState,
            center: allLocations[0].coordinates,
        }))
    }, [allLocations, setMapState])

    return (
        <TourPageLayout>
            <section className="h-full flex flex-col gap-6">
                <TourPageSlider tourImages={tourData.images} />
                {moreThan1280px && (
                    <>
                        <TourPageMap allLocations={allLocations} />
                        <TourLocations allLocations={allLocations} />
                        <TourPageFeatures />
                    </>
                )}
            </section>
            <section className="h-full flex flex-col gap-6">
                <TourInfo tourData={tourData} />
                {!moreThan1280px && (
                    <>
                        <TourPageMap allLocations={allLocations} />
                        <TourLocations allLocations={allLocations} />
                        <TourPageFeatures />
                    </>
                )}
                <TourPrice tourPrice={tourData.price} />
                <TourGuides tourGuides={tourData.guides} />
            </section>
        </TourPageLayout>
    )
}

export default TourPage
