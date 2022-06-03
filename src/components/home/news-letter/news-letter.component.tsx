const NewsLetter: React.FC = () => {
    return (
        <section className="py-32 px-10 bg-gradient-to-br from-lightGreen to-darkGreen flex justify-center items-center">
            <div className="newsletter">
                <h1 className="gradient-title mb-8">Join our newsletter</h1>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="input w-full max-w-xs  input-bordered"
                />
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="input w-full max-w-xs mb-10 input-bordered"
                />
                <button className="btn btn-outline btn-primary">Submit</button>
            </div>
        </section>
    )
}

export default NewsLetter
