import { GetServerSideProps, NextPage } from 'next'

import { useEffect, useMemo, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import GeneralNotFound from '../../../components/general-not-found/general-not-found.component'
import SEO from '../../../components/SEO/SEO.component'
import TourGuides from '../../../components/tour-guides/tour-guides.component'
import TourInfo from '../../../components/tour-info/tour-info.component'
import TourLocations from '../../../components/tour-locations/tour-locations.component'
import TourPageFeatures from '../../../components/tour-page-features/tour-features.component'
import TourPageLayout from '../../../components/tour-page-layout/tour-page-layout.component'
import TourPageMap from '../../../components/tour-page-map/tour-page-map.component'
import TourPageReviews from '../../../components/tour-page-reviews/tour-page-reviews.component'
import TourPageSlider from '../../../components/tour-page-slider/tour-page-slider.component'
import TourPrice from '../../../components/tour-price/tour-price.component'
import axiosInstance from '../../../helpers/axios-instance.helper'
import useMediaQuery from '../../../hooks/use-media-query.hook'
import mapStateAtom from '../../../recoil/atoms/map.atom'
import { THTTPResponse } from '../../../types/http-response.types'
import { TTour } from '../../../types/tour.types'

export const getServerSideProps: GetServerSideProps = async context => {
    try {
        const response = await axiosInstance(
            `/tours/get-by-slug/${context.params!.slug}`
        )

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
    response?: THTTPResponse<TTour | null>
    error?: unknown
}

const TourPage: NextPage<IProps> = ({ response, error }) => {
    const tourData = response?.data

    const setMapState = useSetRecoilState(mapStateAtom)
    const [isMounted, setIsMounted] = useState<boolean>(false)

    const moreThan1280px = useMediaQuery('(min-width: 1280px)')

    const allLocations = useMemo(() => {
        if (!tourData) return []
        let output = [
            {
                description: tourData.startLocation.description,
                coordinates: [
                    tourData.startLocation.coordinates[1],
                    tourData.startLocation.coordinates[0],
                ],
                day: 0,
            },
        ]
        tourData.locations.map(location =>
            output.push({
                description: location.description,
                coordinates: [location.coordinates[1], location.coordinates[0]],
                day: location.day,
            })
        )
        return output
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (!allLocations || !tourData) return
        setMapState(prevState => ({
            ...prevState,
            center: allLocations[0].coordinates,
        }))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allLocations, setMapState])

    useEffect(() => {
        setIsMounted(true)

        return () => {
            setIsMounted(false)
        }
    }, [])

    return !tourData || error ? (
        <GeneralNotFound
            btnMessage="Visit other tours"
            message="This tour does not exist"
            redirect="/tours"
        />
    ) : (
        <>
            <SEO
                title={tourData.name}
                description={tourData.summary}
                image={tourData.coverImage}
            />
            <>
                <TourPageLayout>
                    <section className="h-full flex flex-col gap-6">
                        <TourPageSlider tourImages={tourData.images} />
                        {isMounted && moreThan1280px && (
                            <>
                                <TourPageMap allLocations={allLocations} />
                                <TourLocations allLocations={allLocations} />
                                <TourPageFeatures />
                            </>
                        )}
                    </section>
                    <section className="h-full flex flex-col gap-6">
                        <TourInfo tourData={tourData} />
                        {isMounted && !moreThan1280px && (
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
                <TourPageReviews tourID={tourData._id} />
            </>
        </>
    )
}

export default TourPage
