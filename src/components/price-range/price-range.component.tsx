import { useState } from 'react'

const PriceRange: React.FC = () => {
    const [priceRange, setPriceRange] = useState<number>(999)
    return (
        <div className="p-4 select-none">
            <h2 className="text-lg py-4 font-semibold ">Price</h2>
            <input
                type="range"
                min="100"
                max="999"
                value={priceRange}
                className="range range-primary range-sm mb-3"
                onChange={e => setPriceRange(Number(e.target.value))}
            />
            <div className="flex items-center justify-between w-full font-semibold">
                <span>$100</span>
                <span>${priceRange}</span>
            </div>
        </div>
    )
}

export default PriceRange
