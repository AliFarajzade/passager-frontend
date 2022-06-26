import Image from 'next/image'
import Link from 'next/link'

interface IProps {
    message: string
    btnMessage: string
    redirect: string
}

const GeneralNotFound: React.FC<IProps> = ({
    btnMessage,
    message,
    redirect,
}) => {
    return (
        <div className="w-full bg-white flex flex-col justify-center items-center">
            <Image
                src="/images/not-found-man.gif"
                alt="Not Found"
                width="800px"
                height="600px"
            />
            <div className="-translate-y-16 text-center space-y-5">
                <h1 className="text-4xl font-semibold">{message}</h1>
                <Link href={redirect}>
                    <button className="btn btn-secondary font-semibold text-xl capitalize">
                        {btnMessage}
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default GeneralNotFound
