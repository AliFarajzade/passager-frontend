const DifficultyPicker: React.FC = () => {
    return (
        <div className="p-4">
            <h2 className="text-lg py-4 font-semibold mb-3">Difficulty</h2>
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4 px-4 py-0 cursor-pointer">
                    <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                    />
                    Easy
                </div>
                <div className="flex items-center gap-4 px-4 py-0 cursor-pointer">
                    <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                    />
                    Medium
                </div>
                <div className="flex items-center gap-4 px-4 py-0 cursor-pointer">
                    <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                    />
                    Hard
                </div>
            </div>
        </div>
    )
}

export default DifficultyPicker
