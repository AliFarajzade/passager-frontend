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
