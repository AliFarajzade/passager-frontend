interface IProps {
    modalView: 'signIn' | 'signUp' | 'forgot'
}

const AuthModalnputs: React.FC<IProps> = ({ modalView }) => {
    if (modalView === 'signIn')
        return (
            <>
                <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered w-full"
                />
                <input
                    type="password"
                    placeholder="Passowrd"
                    className="input input-bordered w-full"
                />
            </>
        )
    else if (modalView === 'signUp')
        return (
            <>
                <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full"
                />
                <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered w-full"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                />
                <input
                    type="password"
                    placeholder="Confirm Passowrd"
                    className="input input-bordered w-full"
                />
            </>
        )
    else if (modalView === 'forgot')
        return (
            <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full"
            />
        )
    else return null
}

export default AuthModalnputs
