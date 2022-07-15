import { useState } from 'react'
import { Range } from 'react-date-range'
import QuickSearch from '../../quick-search/quick-search.component'
import HomeHeroCalender from '../home-hero-calender/home-hero-calender.component'
import styles from './home-hero.module.scss'

const HomeHero = () => {
    const [datePickerVisibility, setDatePickerVisibility] =
        useState<boolean>(false)

    const [date, setDate] = useState<Range[]>([
        {
            startDate: new Date(),
            endDate: new Date(
                new Date().setFullYear(new Date().getFullYear() + 1)
            ),
            key: 'selection',
        },
    ])

    return (
        <div className="relative">
            <header className={styles.hero}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-[.45em]">
                    OUTDOORS
                </h1>
                <h4 className="sm:text-2xl font-semibold tracking-[.4em]">
                    IS WHERE LIFE HAPPENS
                </h4>
                <QuickSearch
                    setDatePickerVisibility={setDatePickerVisibility}
                    date={date}
                />
            </header>
            {datePickerVisibility && (
                <div className="absolute z-50 top-[60.7%] sm:top-[62.7%] left-1/2 -translate-x-1/2 sm:left-[48.5%] sm:translate-x-0">
                    <HomeHeroCalender date={date} setDate={setDate} />
                </div>
            )}
        </div>
    )
}

export default HomeHero
