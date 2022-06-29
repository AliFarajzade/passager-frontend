import Image from 'next/image'

interface IProps {
    name: string
    photo: string
}

const UserAvatar: React.FC<IProps> = ({ name, photo }) => (
    <div className="avatar">
        <div className="w-full h-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
            <Image src={`/${photo}`} alt={name} width="100%" height="100%" />
        </div>
    </div>
)

export default UserAvatar
