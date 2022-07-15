import { useRouter } from 'next/router'

interface IProps {
    className?: string
}

const ClearFilter: React.FC<IProps> = ({ className }) => {
    const router = useRouter()

    const handleClearFilter = () => router.push('/tours')

    return Object.keys(router.query).length > 0 ? (
        <button
            onClick={handleClearFilter}
            className={`btn btn-accent text-lg font-bold ${className ?? ''}`}
        >
            Clear Filter
        </button>
    ) : null
}

export default ClearFilter
