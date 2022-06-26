import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'

const DifficultyPicker: React.FC = () => {
    const [difficulty, setDifficulty] = useState<string | undefined>(undefined)

    const handleChagne = (event: ChangeEvent<HTMLInputElement>) => {
        const difficulty = event.target.dataset.difficulty as string
        setDifficulty(difficulty)
    }

    const router = useRouter()

    useEffect(() => {
        if (!difficulty) return

        router.push({
            query: { ...router.query, difficulty },
        })
    }, [difficulty])

    return (
        <div className="p-4">
            <h2 className="text-lg py-4 font-semibold mb-3">Difficulty</h2>
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4 px-4 py-0 cursor-pointer">
                    <input
                        onChange={handleChagne}
                        name="radio-1"
                        type="radio"
                        className="radio radio-primary"
                        data-difficulty="easy"
                    />
                    Easy
                </div>
                <div className="flex items-center gap-4 px-4 py-0 cursor-pointer">
                    <input
                        onChange={handleChagne}
                        name="radio-1"
                        type="radio"
                        className="radio radio-primary"
                        data-difficulty="medium"
                    />
                    Medium
                </div>
                <div className="flex items-center gap-4 px-4 py-0 cursor-pointer">
                    <input
                        onChange={handleChagne}
                        name="radio-1"
                        type="radio"
                        className="radio radio-primary"
                        data-difficulty="difficult"
                    />
                    Difficult
                </div>
            </div>
        </div>
    )
}

export default DifficultyPicker
