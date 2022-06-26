import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'

const SelectDuration: React.FC = () => {
    const [minMax, setMinMax] = useState<{
        min: string | undefined
        max: string | undefined
    }>({
        min: undefined,
        max: undefined,
    })

    const router = useRouter()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const min = event.target.dataset.min
        const max = event.target.dataset.max

        setMinMax({ min, max })
    }

    useEffect(() => {
        if (!minMax.min && !minMax.max) return

        const queryObj = { ...router.query }

        if (minMax.min) queryObj['duration[gte]'] = minMax.min
        if (minMax.max) queryObj['duration[lte]'] = minMax.max

        router.push({
            query: queryObj,
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [minMax.min, minMax.max])

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Duration</h2>
            <div className="flex items-center gap-3 p-4">
                <input
                    type="radio"
                    name="radio-1"
                    className="radio radio-primary"
                    data-max={2}
                    onChange={handleChange}
                />
                Up to 2 days
            </div>
            <div className="flex items-center gap-3 p-4">
                <input
                    type="radio"
                    name="radio-1"
                    className="radio radio-primary"
                    data-max={4}
                    data-min={3}
                    onChange={handleChange}
                />
                Between 3 to 4 days
            </div>

            <div className="flex items-center gap-3 p-4">
                <input
                    type="radio"
                    name="radio-1"
                    className="radio radio-primary"
                    data-max={8}
                    data-min={5}
                    onChange={handleChange}
                />
                Between 5 to 8 days
            </div>

            <div className="flex items-center gap-3 p-4">
                <input
                    type="radio"
                    name="radio-1"
                    className="radio radio-primary"
                    data-min={9}
                    onChange={handleChange}
                />
                More than 9 days
            </div>
        </div>
    )
}

export default SelectDuration
