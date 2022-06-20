import { useEffect, useRef, useState } from 'react'
import { FiMap } from 'react-icons/fi'
import { WiDaySunny } from 'react-icons/wi'
import { useSetRecoilState } from 'recoil'
import useIntersectionObserver from '../../hooks/use-intersection-observer.hook'
import mapStateAtom from '../../recoil/atoms/map.atom'

interface IProps {
    allLocations: {
        description: string
        coordinates: number[]
        day: number
    }[]
}

const TourLocations: React.FC<IProps> = ({ allLocations }) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(ref, { threshold: 1 })
    const isVisible = !!entry?.isIntersecting

    const [isToolTipVisible, setIsToolTipVisible] = useState<boolean>(false)

    const setMapState = useSetRecoilState(mapStateAtom)

    const showLocationOnMap = (cords: number[]) =>
        setMapState(prevState => ({ ...prevState, zoom: 16, center: cords }))

    useEffect(() => {
        if (isVisible) {
            setIsToolTipVisible(true)
            setTimeout(() => setIsToolTipVisible(false), 4000)
        }
    }, [isVisible])

    return (
        <div
            className="bg-white border-[1px] border-lightGreenAlpha shadow-lg p-4 rounded-md"
            ref={ref}
        >
            <div
                className={`tooltip ${isToolTipVisible && 'tooltip-open'} `}
                data-tip="Tip: You can click on buttons below to see the exact location on map."
            >
                <div className="flex gap-3 items-center justify-between p-4 mb-4">
                    <h1 className="text-xl font-bold text-gray-600 flex items-center gap-3">
                        <FiMap size="1.5em" className="text-lightGreenAlpha" />
                        Locations that we are gonna explore:
                    </h1>
                </div>
            </div>
            <div className="flex gap-x-2 gap-y-4 flex-wrap items-center">
                {allLocations.map(location => (
                    <button
                        key={location.description}
                        className="btn btn-ghost btn-outline flex gap-1  items-center text-center text-lg capitalize flex-grow"
                        onClick={() => showLocationOnMap(location.coordinates)}
                    >
                        <WiDaySunny
                            size="2em"
                            className="text-lightGreenAlpha"
                        />
                        {location.day === 0
                            ? 'Start location: '
                            : `Day ${location.day}: `}
                        {location.description}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default TourLocations
