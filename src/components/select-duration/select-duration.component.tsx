const SelectDuration: React.FC = () => {
    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Duration</h2>
            <div className="flex items-center gap-3 p-4">
                <input type="radio" name="radio-1" className="radio" />
                Up to 2 days
            </div>
            <div className="flex items-center gap-3 p-4">
                <input type="radio" name="radio-1" className="radio" />
                Between 3 to 4 days
            </div>

            <div className="flex items-center gap-3 p-4">
                <input type="radio" name="radio-1" className="radio" />
                Between 5 to 8 days
            </div>

            <div className="flex items-center gap-3 p-4">
                <input type="radio" name="radio-1" className="radio" />
                More than 9 days
            </div>
        </div>
    )
}

export default SelectDuration
