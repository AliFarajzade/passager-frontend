import { useCallback, useState } from 'react'
import { DateRange, Range } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { AiOutlineCalendar } from 'react-icons/ai'

const DatePicker: React.FC = () => {
    const [datePickerVisibility, setDatePickerVisibility] =
        useState<boolean>(false)
    const [date, setDate] = useState<Range[]>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ])

    const toggleOpenCalender = useCallback(
        () => setDatePickerVisibility(prevState => !prevState),
        []
    )

    return (
        <div className="bg-lightGreenAlpha p-4 space-y-3 h-[128px] select-none">
            <h2 className="text-lg font-semibold text-white">
                When are you traveling?
            </h2>
            <div
                className="bg-white p-3 flex items-center gap-3 rounded-md text-slate-500 cursor-pointer hover:bg-white/90"
                onClick={toggleOpenCalender}
            >
                <AiOutlineCalendar size="2em" />
                Select Dates
            </div>
            {datePickerVisibility && (
                <DateRange
                    className="-translate-x-3 relative z-50"
                    editableDateInputs={true}
                    onChange={item => {
                        const { startDate, endDate, key } =
                            item.selection! as Range
                        if (!startDate || !endDate || !key) return
                        setDate([{ startDate, endDate, key }])
                    }}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                />
            )}
        </div>
    )
}

export default DatePicker
