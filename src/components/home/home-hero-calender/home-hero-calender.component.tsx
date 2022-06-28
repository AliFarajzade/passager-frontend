import { Dispatch, SetStateAction } from 'react'
import { DateRange, Range } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file

interface IProps {
    date: Range[]
    setDate: Dispatch<SetStateAction<Range[]>>
}

const HomeHeroCalender: React.FC<IProps> = ({ date, setDate }) => {
    return (
        <DateRange
            className="absolute z-50 top-[64.2%] left-1/2 -translate-x-1/2 sm:top-[65.7%] sm:left-[48.5%] sm:translate-x-0"
            editableDateInputs={true}
            onChange={item => {
                const { startDate, endDate, key } = item.selection! as Range
                if (!startDate || !endDate || !key) return
                setDate([{ startDate, endDate, key }])
            }}
            moveRangeOnFirstSelection={false}
            ranges={date}
            minDate={new Date()}
        />
    )
}

export default HomeHeroCalender
