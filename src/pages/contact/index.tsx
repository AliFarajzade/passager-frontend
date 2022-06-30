import { NextPage } from 'next'
import { FiPhoneOutgoing } from 'react-icons/fi'
import SEO from '../../components/SEO/SEO.component'

const ContactPage: NextPage = () => {
    return (
        <>
            <SEO
                title="Contact Us"
                description="Contact Us"
                image="/images/logo-gradient.png"
            />
            <div className="bg-gradient-to-br from-lightGreenAlpha to-darkGreenAlpha  md:p-32 flex justify-center items-center">
                <div className="bg-white flex flex-col items-center justify-center shadow-2xl w-full py-24 gap-7">
                    <FiPhoneOutgoing size="100px" />
                    <div className="space-y-5">
                        <h1 className="text-3xl font-bold">
                            You will always listen
                        </h1>
                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Your name"
                                className="input input-bordered input-primary w-full max-w-xs"
                            />
                            <input
                                type="text"
                                placeholder="Your email"
                                className="input input-bordered input-primary w-full max-w-xs"
                            />
                            <textarea
                                className="textarea textarea-primary"
                                placeholder="Message"
                            />
                            <button className="btn btn-primary ">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage
