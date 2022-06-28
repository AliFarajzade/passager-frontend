import moment from 'moment'
import { useRouter } from 'next/router'
import {
    ChangeEvent,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from 'react'
import { Range } from 'react-date-range'
import { AiOutlineCalendar } from 'react-icons/ai'

interface IProps {
    setDatePickerVisibility: Dispatch<SetStateAction<boolean>>
    date: Range[]
}

const QuickSearch: React.FC<IProps> = ({ setDatePickerVisibility, date }) => {
    const [city, setCity] = useState<string>('')

    const router = useRouter()

    const handleChangeCalenderVisibility = () =>
        setDatePickerVisibility(prevState => !prevState)

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) =>
        setCity(event.target.value.toLowerCase().trim())

    const handlePerfomQuery = () => {
        if (!city || !date[0].endDate || !date[0].startDate) return

        router.push(
            `/tours?city=${city}&startDate[gte]=${date[0].startDate.toISOString()}&startDate[lte]=${date[0].endDate.toISOString()}`
        )
    }

    useEffect(() => {
        return () => setDatePickerVisibility(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="input-group w-[90%] max-w-xl relative">
            <input
                type="text"
                placeholder="Search By City..."
                className="input flex-grow border-2 border-r-0 border-gray-300 text-gray-500 w-[100px] sm:w-auto max-w-[270px]"
                onChange={handleChangeInput}
            />
            <button
                onClick={handleChangeCalenderVisibility}
                className="btn btn-outline flex items-center gap-3 flex-grow bg-white border-2 border-gray-300 text-gray-500 shrink whitespace-nowrap"
            >
                <AiOutlineCalendar size="1.5em" />
                {moment(new Date()).format('MMMM DD')}
            </button>
            <button
                className="btn btn-square btn-primary text-white"
                onClick={handlePerfomQuery}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </button>
        </div>
    )
}

export default QuickSearch
