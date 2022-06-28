import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'

const SearchCity: React.FC = () => {
    const [city, setCity] = useState<string | undefined>(undefined)

    const router = useRouter()

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) =>
        setCity(event.target.value.toLowerCase().trim())

    const handleSearchCity = async () =>
        router.push({
            query: { ...router.query, city },
        })

    return (
        <div className="p-4">
            <h2 className="text-lg py-4 font-semibold">Search by City</h2>
            <div className="input-group">
                <input
                    onChange={handleChangeInput}
                    type="text"
                    placeholder="Search…"
                    className="input input-bordered flex-1"
                />
                <button
                    onClick={handleSearchCity}
                    className="btn btn-square btn-primary text-white"
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
        </div>
    )
}

export default SearchCity
