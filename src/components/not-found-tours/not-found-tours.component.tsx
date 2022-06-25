import Image from 'next/image'
import Link from 'next/link'

const NotFoundTour: React.FC = () => (
    <div className="flex justify-center items-center flex-col gap-7 bg-white pb-14 px-5 text-center">
        <Image
            src="/images/not-found.gif"
            alt="Not Found"
            width="600px"
            height="450px"
        />
        <h1 className="font-bold text-2xl lg:text-4xl">
            Sorry, We did not found any tour.
        </h1>
        <Link href="/tours">
            <button className="btn btn-secondary font-semibold text-xl capitalize">
                explore other tours
            </button>
        </Link>
    </div>
)

export default NotFoundTour
