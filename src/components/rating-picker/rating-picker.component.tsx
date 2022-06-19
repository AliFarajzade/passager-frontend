import ReactStars from 'react-rating-stars-component'
const RatingPicker: React.FC = () => {
    const handleChangeRating = (newRating: number) => console.log(newRating)

    return (
        <div className="p-4 select-none">
            <h2 className="text-lg font-semibold mb-4">Rating</h2>
            <div className="flex flex-col gap-3 p-4">
                <div className="flex gap-2 items-center">
                    <input
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary radio-md"
                    />
                    <ReactStars
                        count={5}
                        onChange={handleChangeRating}
                        size={20}
                        activeColor="#7ed56f"
                        edit={false}
                        value={5}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary radio-md"
                    />
                    <ReactStars
                        count={5}
                        onChange={handleChangeRating}
                        size={20}
                        activeColor="#7ed56f"
                        edit={false}
                        value={4}
                    />
                    <span>& Up</span>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary radio-md"
                    />
                    <ReactStars
                        count={5}
                        onChange={handleChangeRating}
                        size={20}
                        activeColor="#7ed56f"
                        edit={false}
                        value={3}
                    />
                    <span>& Up</span>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary radio-md"
                    />
                    <ReactStars
                        count={5}
                        onChange={handleChangeRating}
                        size={20}
                        activeColor="#7ed56f"
                        edit={false}
                        value={2}
                    />
                    <span>& Up</span>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary radio-md"
                    />
                    <ReactStars
                        count={5}
                        onChange={handleChangeRating}
                        size={20}
                        activeColor="#7ed56f"
                        edit={false}
                        value={1}
                    />
                    <span>& Up</span>
                </div>
            </div>
        </div>
    )
}

export default RatingPicker
