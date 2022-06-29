interface IProps {
    name: string
}

const NoAvatar: React.FC<IProps> = ({ name }) => {
    return (
        <div className="w-full h-full rounded-full flex justify-center items-center bg-lightGreen font-bold text-white text-lg shrink-0">
            {name
                .split(' ')
                .map(name => name[0])
                .join('')}
        </div>
    )
}

export default NoAvatar
