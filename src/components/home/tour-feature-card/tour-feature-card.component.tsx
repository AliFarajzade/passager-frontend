import { IconType } from 'react-icons'

interface IProps {
    cardData: {
        IconComponent: IconType
        title: string
        descriptions: string
    }
}

const TourFeatureCard: React.FC<IProps> = ({ cardData }) => {
    const { IconComponent, title, descriptions } = cardData

    return (
        <div className="bg-white/80 rounded-sm text-center flex flex-col gap-2 items-center p-10 prose shadow-lg transition-all hover:shadow-2xl hover:scale-105 hover:-translate-y-2 ">
            <IconComponent className="text-lightGreen" size="3.5em" />
            <h4>{title}</h4>
            <p>{descriptions}</p>
        </div>
    )
}

export default TourFeatureCard
