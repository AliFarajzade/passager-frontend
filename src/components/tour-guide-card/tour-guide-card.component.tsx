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
            className="max-h-[400px] border-[1px] border-lightGreenAlpha rounded-lg shadow-lg flex flex-col items-center
        py-6 px-4 text-center bg-white"
        >
            <div className="w-24 mask mask-squircle">
                <Image
                    width="100%"
                    height="100%"
                    // TODO: Fix me
                    src={`/images/guide-1.jpg`}
                    alt={tourGuide.name}
                />
            </div>
            <div className="mb-3">
                <h2 className="py-4 text-xl font-bold">{tourGuide.name}</h2>
                <p className="text-gray-600 ">{tourGuide.description}</p>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <div className="btn-group">
                    <button className="btn btn-primary btn-sm">Follow</button>{' '}
                    <button
                        aria-label="button component"
                        className="btn btn-primary btn-square btn-sm"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="h-6 w-6 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </a>
        </div>
    )
}

export default TourGuideCard
