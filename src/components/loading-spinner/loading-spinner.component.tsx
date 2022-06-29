import Image from 'next/image'

const LoadingSpinner: React.FC = () => {
    return (
        <Image
            width="100%"
            height="100%"
            alt="Loading..."
            src="/images/loading-spinner.svg"
            objectPosition="center"
        />
    )
}

export default LoadingSpinner
