import { useSetRecoilState } from 'recoil'
import useGetMe from '../../hooks/use-get-me.hook'
import authModalStateAtom from '../../recoil/atoms/auth-modal.atom'

interface IProps {
    tourPrice: number
}

const TourPrice: React.FC<IProps> = ({ tourPrice }) => {
    const [userState] = useGetMe()
    const setAuthModalState = useSetRecoilState(authModalStateAtom)

    const handleBook = () => {
        if (!userState.user)
            return setAuthModalState(prevState => ({
                ...prevState,
                open: true,
                view: 'signIn',
            }))

        alert(
            'You have booked the tour!\nThis is fake abviously and to implement this I needed to use stripe or some payment solution which is not implemented.'
        )
    }

    return (
        <div className="p-4 border-[1px] border-lightGreenAlpha rounded-md w-full shadow-lg space-y-4 bg-white">
            <span className="text-4xl font-bold tracking-wide text-gradient">
                ${tourPrice}
            </span>
            <div className="flex gap-3">
                <button
                    className="btn btn-primary border-0 col-span-3 font-bold text-white text-lg capitalize btn-rgb flex-1"
                    onClick={handleBook}
                >
                    Book Now!
                </button>
            </div>
            <p className="text-sm text-gray-500 text-center">
                You can cancel the booking 24 hours before the tour begins.
            </p>
        </div>
    )
}

export default TourPrice
