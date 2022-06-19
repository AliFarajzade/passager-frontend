import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useMemo, useRef } from 'react'

interface IProps {
    startLocation: {
        type: string
        coordinates: number[]
        address: string
        description: string
    }
    locations: {
        type: string
        coordinates: number[]
        description: string
        day: number
    }[]
}

const TourPageMap: React.FC<IProps> = ({ locations, startLocation }) => {
    const mapContainer = useRef<any>(null)
    const map = useRef<mapboxgl.Map | any>(null)

    const allLocations = useMemo(() => {
        let output = [
            {
                description: startLocation.description,
                coordinates: startLocation.coordinates,
            },
        ]
        locations.map(location =>
            output.push({
                description: location.description,
                coordinates: location.coordinates,
            })
        )
        return output
    }, [locations, startLocation.coordinates, startLocation.description])

    useEffect(() => {
        mapboxgl.accessToken = process.env
            .NEXT_PUBLIC_MAPBOX_SECRET_KEY as string
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [
                allLocations[2].coordinates[0],
                allLocations[2].coordinates[1],
            ],
            zoom: 6.5,
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
    }, [allLocations])

    return (
        <main className="rounded-md overflow-hidden">
            <div className="map-container h-[450px]" ref={mapContainer} />
        </main>
    )
}

export default TourPageMap
