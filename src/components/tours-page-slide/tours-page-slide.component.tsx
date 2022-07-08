interface IProps {
    sliderData: {
        title: string
        description: string
        image: string
    }
}

const ToursPageSlide: React.FC<IProps> = ({ sliderData }) => (
    <div
        style={{ backgroundImage: `url(${sliderData.image})` }}
        className="w-full h-full bg-cover bg-no-repeat bg-center flex justify-center md:justify-start items-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full  before:bg-black/20 before:z-10"
    >
        <div className="p-0 px-3 md:px-10 text-white space-y-4 z-20 text-center md:text-left">
            <h2 className="font-bold text-3xl md:text-4xl">
                {sliderData.title}
            </h2>
            <p className="font-semibold">{sliderData.description}</p>
        </div>
    </div>
)

export default ToursPageSlide
