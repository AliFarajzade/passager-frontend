import mapboxgl, { LngLatLike } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import mapStateAtom from '../../recoil/atoms/map.atom'

interface IProps {
    allLocations: {
        description: string
        coordinates: number[]
        day: number
    }[]
}

const TourPageMap: React.FC<IProps> = ({ allLocations }) => {
    const mapState = useRecoilValue(mapStateAtom)

    const mapContainer = useRef<any>(null)
    const map = useRef<mapboxgl.Map | any>(null)

    useEffect(() => {
        mapboxgl.accessToken = process.env
            .NEXT_PUBLIC_MAPBOX_SECRET_KEY as string
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: mapState.center! as LngLatLike,
            zoom: mapState.zoom,
        })

        // Add markers
        map.current.on('load', () => {
            allLocations.forEach(location => {
                // create a DOM element for the marker
                const markerIcon = document.createElement('div')
                markerIcon.style.backgroundImage = 'url(/images/marker.png)'
                markerIcon.style.width = '50px'
                markerIcon.style.height = '50px'
                markerIcon.style.backgroundSize = 'cover'
                markerIcon.style.backgroundPosition = 'center'

                new mapboxgl.Marker(markerIcon)
                    .setLngLat({
                        lat: location.coordinates[1],
                        lng: location.coordinates[0],
                    }) // add marker to map
                    .setPopup(
                        // add pop out to map
                        new mapboxgl.Popup({ offset: 25 }).setHTML(
                            `<h1>${location.description}</h1>`
                        )
                    )
                    .addTo(map.current)
            })
        })
    }, [allLocations, mapState.zoom, mapState.center])

    return (
        <main className="rounded-md overflow-hidden">
            <div className="map-container h-[450px]" ref={mapContainer} />
        </main>
    )
}

export default TourPageMap
