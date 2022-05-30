import { FaGoogle } from 'react-icons/fa'
const AuthModal: React.FC = () => {
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="my-modal-3"
                        className="btn btn-primary text-white btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>

                    <div className="flex flex-col text-center">
                        <h1 className="font-bold text-xl">Sign In</h1>
                        <div className="divider"></div>
                        <button className="btn border-none text-white bg-red-500 flex items-center">
                            <FaGoogle className="mr-2" size="15px" />
                            Sing In with Google
                        </button>
                        <div className="divider py-6">OR</div>
                        <div className="flex flex-col gap-3 mx-auto w-5/6 max-w-xs">
                            {/* Error alert */}
                            <div className="hidden alert alert-error shadow-lg mb-4">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current flex-shrink-0 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>
                                        Error! Task failed successfully.
                                    </span>
                                </div>
                            </div>
                            <input
                                type="text"
                                placeholder="Email"
                                className="input input-bordered w-full"
                            />
                            <input
                                type="text"
                                placeholder="Passowrd"
                                className="input input-bordered w-full"
                            />
                            <button className="btn btn-primary mt-4">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthModal
