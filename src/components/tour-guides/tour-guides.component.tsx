import TourGuideCard from '../tour-guide-card/tour-guide-card.component'

interface IProps {
    tourGuides: {
        name: string
        photo: string
        description: string
    }[]
}

const TourGuides: React.FC<IProps> = ({ tourGuides }) => {
    return (
        <div className="space-y-6 ">
            <div className="text-center text-xl font-semibold bg-white shadow-md rounded-md py-5">
                Your Guides:
            </div>
            {tourGuides.map(guide => (
                <TourGuideCard tourGuide={guide} key={guide.name} />
            ))}
        </div>
    )
}

export default TourGuides
