import { useState } from 'react'
import { BiSave } from 'react-icons/bi'
import { FiFilter } from 'react-icons/fi'
import DatePicker from '../date-picker/date-picker.component'
import DifficultyPicker from '../difficulty-picker/difficulty-picker.component'
import PriceRange from '../price-range/price-range.component'
import RatingPicker from '../rating-picker/rating-picker.component'
import SearchCity from '../search-city/search-city.component'
import SelectDuration from '../select-duration/select-duration.component'

const SmallerScreenFilter: React.FC = () => {
    const [filterMenuVisibility, setFilterMenuVisibility] =
        useState<boolean>(false)

    const toggleFilterMenuVisibility = (
        visible: boolean = !filterMenuVisibility
    ) => setFilterMenuVisibility(visible)

    return (
        <>
            <div className="px-5 pt-6 xl:hidden">
                <button
                    className="btn  btn-primary w-full flex gap-3 items-center font-bold text-[15px]"
                    onClick={() => toggleFilterMenuVisibility(true)}
                >
                    <FiFilter size="1.2em" />
                    Filter
                </button>
            </div>
            {filterMenuVisibility && (
                <div className="fixed inset-0 bg-white z-50  overflow-scroll">
                    <div className="pb-24">
                        <DatePicker />
                        <SearchCity />
                        <PriceRange />
                        <SelectDuration />
                        <RatingPicker />
                        <DifficultyPicker />
                    </div>
                    <div className="fixed bg-slate-200 border-2 border-gray-200 bottom-0 left-0 right-0 h-20 p-2 flex justify-center items-center">
                        <button
                            className="btn btn-primary w-full flex items-center gap-2 text-base font-semibold text-white"
                            onClick={() => toggleFilterMenuVisibility(false)}
                        >
                            <BiSave size="1.5em" />
                            <span className="capitalize">Apply</span>
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default SmallerScreenFilter
