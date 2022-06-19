import Image from 'next/image'

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
            className="max-h-80 border-[1px] border-lightGreenAlpha rounded-lg shadow-lg flex flex-col items-center
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
            <h2 className="py-4 text-xl font-bold">{tourGuide.name}</h2>
            <p className="text-gray-600 ">{tourGuide.description}</p>
        </div>
    )
}

export default TourGuideCard
