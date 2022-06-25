import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import { INITIAL_LIMIT } from '../../helpers/data.helper'

interface IProps {
    page: number
    setPage: Dispatch<SetStateAction<number>>
    total: number | undefined
}

const TourPagePagination: React.FC<IProps> = ({ page, setPage, total }) => {
    const router = useRouter()

    const totalNumberOfPages = Math.ceil(total! / INITIAL_LIMIT)

    const handleChangePage = (newPage: number = page) => {
        if (newPage < 1 || newPage > totalNumberOfPages) return
        setPage(newPage)
        router.push({
            query: { ...router.query, page: newPage, limit: INITIAL_LIMIT },
        })
    }

    return (
        <div className="w-full flex justify-center">
            <div className="btn-group">
                <button
                    onClick={() => handleChangePage(page + -1)}
                    className="btn"
                    disabled={page === 1}
                >
                    «
                </button>
                <button className="btn">Page {page}</button>
                <button
                    onClick={() => handleChangePage(page + 1)}
                    className="btn"
                    disabled={page === totalNumberOfPages}
                >
                    »
                </button>
            </div>
        </div>
    )
}

export default TourPagePagination
