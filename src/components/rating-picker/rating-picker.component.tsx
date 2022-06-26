import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'
import ReactStars from 'react-rating-stars-component'
const RatingPicker: React.FC = () => {
    const [min, setMin] = useState<string | undefined>(undefined)

    const router = useRouter()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const min = event.target.dataset.min!
        setMin(min)
    }

    useEffect(() => {
        if (!min) return
        router.push({
            query: { ...router.query, 'averageRating[gte]': min },
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [min])

    return (
        <div className="p-4 select-none">
            <h2 className="text-lg font-semibold mb-4">Rating</h2>
            <div className="flex flex-col gap-3 p-4">
                <div className="flex gap-2 items-center">
                    <input
                        onChange={handleChange}
                        data-min={4.5}
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary radio-md"
                    />
                    <ReactStars
                        count={5}
                        onChange={() => {}}
                        size={20}
                        activeColor="#7ed56f"
                        edit={false}
                        value={5}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <input
                        onChange={handleChange}
                        data-min={4}
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary radio-md"
                    />
                    <ReactStars
                        count={5}
                        onChange={() => {}}
                        size={20}
                        activeColor="#7ed56f"
                        edit={false}
                        value={4}
                    />
                    <span>& Up</span>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        onChange={handleChange}
                        data-min={3}
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary radio-md"
                    />
                    <ReactStars
                        count={5}
                        onChange={() => {}}
                        size={20}
                        activeColor="#7ed56f"
                        edit={false}
                        value={3}
                    />
                    <span>& Up</span>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        onChange={handleChange}
                        data-min={2}
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary radio-md"
                    />
                    <ReactStars
                        count={5}
                        onChange={() => {}}
                        size={20}
                        activeColor="#7ed56f"
                        edit={false}
                        value={2}
                    />
                    <span>& Up</span>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        onChange={handleChange}
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary radio-md"
                        data-min={1}
                    />
                    <ReactStars
                        count={5}
                        onChange={() => {}}
                        size={20}
                        activeColor="#7ed56f"
                        edit={false}
                        value={1}
                    />
                    <span>& Up</span>
                </div>
            </div>
        </div>
    )
}

export default RatingPicker
