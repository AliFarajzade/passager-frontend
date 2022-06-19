import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'

interface IProps {
    tourGuide: {
        name: string
        photo: string
        description: string
    }
}

const TourGuideCard: React.FC<IProps> = ({ tourGuide }) => {
    return (
        <div
            className="max-h-[400px] border-[1px] border-lightGreenAlpha rounded-lg shadow-lg flex flex-col items-center
        py-6 px-4 text-center"
        >
            <div className="w-24 mask mask-squircle">
                <Image
                    width="100%"
                    height="100%"
                    src={tourGuide.photo}
                    alt={tourGuide.name}
                />
            </div>
            <div className="mb-3">
                <h2 className="py-4 text-xl font-bold">{tourGuide.name}</h2>
                <p className="text-gray-600 ">{tourGuide.description}</p>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram
                    size="2.7em"
                    className="text-gray-400 hover:text-gray-800"
                    cursor="pointer"
                />
            </a>
        </div>
    )
}

export default TourGuideCard
