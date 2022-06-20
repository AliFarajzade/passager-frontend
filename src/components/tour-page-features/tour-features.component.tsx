import { BsPeopleFill, BsShieldShaded } from 'react-icons/bs'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { MdOutlineChecklistRtl } from 'react-icons/md'

const featuresData = [
    {
        title: 'Personal',
        description: 'Make your adventure more you.',
        Icon: MdOutlineChecklistRtl,
    },
    {
        title: 'Private',
        description: 'Enjoy a tour focused solely on your travel group.',
        Icon: BsPeopleFill,
    },
    {
        title: 'Professional',
        description: 'Access our Travel Experts’ insider knowledge.',
        Icon: HiOutlineLightBulb,
    },
    {
        title: 'Protected',
        description: 'Travel within your own bubble.',
        Icon: BsShieldShaded,
    },
]

const TourPageFeatures: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 border-[1px] border-lightGreenAlpha bg-white rounded-md p-4">
            {featuresData.map(({ title, description, Icon }) => (
                <div
                    key={title}
                    className="flex flex-col items-center gap-3 text-center bg-gradient-to-r from-lightGreenAlpha/90 to-darkGreenAlpha/90 rounded-lg p-6 text-white"
                >
                    <div className="flex flex-col items-center gap-3">
                        <Icon size="2.5em" />
                        <h1 className="text-xl font-bold">{title}</h1>
                    </div>
                    <p className="font-semibold">{description}</p>
                </div>
            ))}
        </div>
    )
}

export default TourPageFeatures
